import { AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATIONS = '@Udacity:notifications';

const clearLocalNotification = () => {
  return AsyncStorage.removeItem(NOTIFICATIONS).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

const createNotification = () => ({
  title: 'Flashcards Study!',
  body: "Don't forget to study today!",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: 'high',
    sticky: false,
    vibrate: true,
  },
});

const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATIONS)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync();

            const today = new Date();
            today.setHours(20);
            today.setMinutes(0);

            Notifications.scheduleLocalNotificationAsync(createNotification(), {
              time: today,
              repeat: 'day',
            });

            AsyncStorage.setItem(NOTIFICATIONS, JSON.stringify(true));
          }
        });
      }
    });
};

export { clearLocalNotification, createNotification, setLocalNotification };
