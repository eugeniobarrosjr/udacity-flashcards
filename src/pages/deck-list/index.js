import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './styles';

import { getDecks } from '../../services';

export default class DeckList extends Component {
  state = {
    decks: [],
  };

  componentDidMount() {
    const { navigation } = this.props;
    this.subscribe = navigation.addListener('didFocus', this.fetchDecks);
  }

  componentWillUnmount() {
    this.subscribe.remove();
  }

  fetchDecks = () => {
    getDecks().then(decks => {
      this.setState({
        decks,
      });
    });
  };

  toDeck = item => {
    const { navigation } = this.props;
    navigation.navigate('Deck', { deck: item });
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => this.toDeck(item)}
        style={styles.deck}
      >
        <Text style={styles.deckTitle}>{item.title}</Text>
        <Text style={styles.deckCardCount}>{item.questions.length} cards</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { decks } = this.state;
    if (decks.length === 0) {
      return (
        <View style={styles.container}>
          <MaterialCommunityIcons name="cards-outline" size={40} color="#999" />
          <Text style={styles.noDecksTitle}>
            You do not have decks at the moment.
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem} />
      </View>
    );
  }
}
