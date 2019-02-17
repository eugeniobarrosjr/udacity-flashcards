import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { addCardToDeck } from '../../services';

import styles from './styles';

export default class AddCard extends Component {
  static navigationOptions = {
    title: 'Add Card',
  };

  state = {
    question: '',
    answer: '',
  };

  submit = () => {
    const { deck } = this.props.navigation.state.params;
    addCardToDeck(deck.key, this.state.question, this.state.answer);
    this.reset();
    this.toHome();
  };

  reset = () => {
    this.setState(() => ({
      question: '',
      answer: '',
    }));
  };

  toHome = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };

  validForm = () => {
    const { answer, question } = this.state;
    return !answer || !question || (answer === '' || question === '');
  };

  render() {
    const { question, answer } = this.state;

    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={questionValue =>
            this.setState(() => ({ question: questionValue }))
          }
          placeholder="Question"
          style={styles.input}
          value={question}
        />
        <TextInput
          onChangeText={answerValue =>
            this.setState(() => ({ answer: answerValue }))
          }
          placeholder="Answer"
          style={styles.input}
          value={answer}
        />
        <TouchableOpacity
          activeOpacity={0.7}
          disabled={this.validForm()}
          onPress={() => this.submit()}
          style={[
            styles.submitButton,
            this.validForm() && styles.submitButtonCancel,
          ]}
        >
          <Text style={styles.submitButtonTitle}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
