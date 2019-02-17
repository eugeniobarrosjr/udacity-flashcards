import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import AddDeck from '../pages/add-deck';
import AddCard from '../pages/add-card';
import Deck from '../pages/deck';
import DeckList from '../pages/deck-list';
import DeckQuiz from '../pages/deck-quiz';

import { colors } from '../styles';

const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name="cards" size={30} color={tintColor} />
        ),
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
        activeColor: colors.primary,
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="library-add" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Decks',
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.whiteTransparent,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: colors.primary,
        borderTopColor: colors.whiteTransparent,
        borderTopWidth: 1,
      },
    },
  }
);

const navOptions = {
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.primary,
  },
};

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Tabs,
      navigationOptions: { ...navOptions, title: 'Flashcards' },
    },
    Deck: {
      screen: Deck,
      navigationOptions: navOptions,
    },
    DeckQuiz: {
      screen: DeckQuiz,
      navigationOptions: navOptions,
    },
    AddCard: {
      screen: AddCard,
      navigationOptions: navOptions,
    },
  })
);

export default Routes;
