import { AsyncStorage } from 'react-native';
import { formatListData } from '../utils';

const CARD_STORAGE = '@Udacity:cards';
const LAST_QUIZ = '@Udacity:lastQuiz';

const addCardToDeck = (key, question, answer) => {
  return AsyncStorage.getItem(CARD_STORAGE).then(results => {
    decks = JSON.parse(results);
    decks[key].questions.push({ question, answer });
    AsyncStorage.setItem(CARD_STORAGE, JSON.stringify(decks));
  });
};

const deleteDeck = key => {
  return AsyncStorage.getItem(CARD_STORAGE).then(results => {
    decks = JSON.parse(results);
    delete decks[key];
    AsyncStorage.setItem(CARD_STORAGE, JSON.stringify(decks));
  });
};

const getDeck = key => {
  return AsyncStorage.getItem(CARD_STORAGE).then(results => {
    const decks = JSON.parse(results);
    return decks[key];
  });
};

const getDecks = () => {
  return AsyncStorage.getItem(CARD_STORAGE).then(results =>
    formatListData(results)
  );
};

const getLastQuizDate = () => {
  return AsyncStorage.getItem(LAST_QUIZ).then(result => {
    const data = JSON.parse(result);
    if (data && data !== 'null' && data.hasOwnProperty('lastQuizDate')) {
      return new Date(Date.parse(data.lastQuizDate));
    } else {
      return null;
    }
  });
};

const logTodaysQuizDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  AsyncStorage.setItem(LAST_QUIZ, JSON.stringify({ lastQuizDate: today }));
};

const saveDeckTitle = title => {
  return AsyncStorage.mergeItem(
    CARD_STORAGE,
    JSON.stringify({
      [title]: {
        key: title,
        questions: [],
        title: title,
      },
    })
  );
};

export {
  addCardToDeck,
  deleteDeck,
  getDeck,
  getDecks,
  getLastQuizDate,
  logTodaysQuizDate,
  saveDeckTitle,
};
