import React, { Component } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { saveDeckTitle, getDeck } from '../../services';

import styles from './styles';

export default class AddDeck extends Component {
  state = {
    title: '',
  };

  submit = () => {
    const { title } = this.state;
    const { navigation } = this.props;
    saveDeckTitle(title);
    getDeck(title).then(deck => navigation.navigate('Deck', { deck }));
    this.setState(() => ({ title: '' }));
  };

  render() {
    const { title } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.containerTitle}>
          What is the title of your new deck?
        </Text>
        <TextInput
          onChangeText={titleValue => this.setState({ title: titleValue })}
          placeholder="Deck Title"
          style={styles.input}
          value={title}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={!title || title === ''}
          onPress={this.submit}
          style={[
            styles.submitButton,
            (!title || title === '') && styles.submitButtonCancel,
          ]}
        >
          <Text style={styles.submitButtonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
