import React, { Component } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

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
    return (
      <View style={styles.container}>
        <FlatList data={decks} renderItem={this.renderItem} />
      </View>
    );
  }
}
