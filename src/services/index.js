import { AsyncStorage } from 'react-native';
import { formatListData } from '../utils';

const CARD_STORAGE = '@Udacity:cards';

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

export { getDeck, getDecks, saveDeckTitle };
