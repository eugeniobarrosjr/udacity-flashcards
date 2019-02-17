import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { deleteDeck, getDeck } from '../../services';

import styles from './styles';

export default class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.getParam('deck').title };
  };

  state = {
    deck: {},
  };

  componentDidMount() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    this.fetchDeck(deck);
    this.subscribe = navigation.addListener('didFocus', () => {
      this.fetchDeck(deck);
    });
  }

  componentWillUnmount() {
    this.subscribe.remove();
  }

  fetchDeck = deck => {
    getDeck(deck.title).then(deck => {
      this.setState({
        deck,
      });
    });
  };

  onPressAddCard = deck => {
    const { navigation } = this.props;
    navigation.navigate('AddCard', {
      deck,
    });
  };

  onPressStartQuiz = deck => {
    const { navigation } = this.props;
    navigation.navigate('DeckQuiz', {
      deck,
    });
  };

  onPressDeleteDeck = deck => {
    const { navigation } = this.props;
    deleteDeck(deck.key);
    navigation.goBack();
  };

  render() {
    const { deck } = this.state;

    return (
      <View style={styles.container}>
        {typeof deck !== 'undefined' && Object.keys(deck).length !== 0 && (
          <View>
            <Text style={styles.deckTitle}>{deck.key}</Text>
            <Text style={styles.deckCardCount}>
              {deck.questions.length} cards
            </Text>
          </View>
        )}
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.onPressAddCard(deck)}
          style={[styles.button, styles.addCardButton]}
        >
          <Text style={styles.buttonTitle}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.onPressStartQuiz(deck)}
          style={[styles.button, styles.startQuizButton]}
        >
          <Text style={styles.buttonTitle}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => this.onPressDeleteDeck(deck)}
          style={[styles.button, styles.deleteButton]}
        >
          <Text style={styles.buttonTitle}>Delete Deck</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
