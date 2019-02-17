import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { logTodaysQuizDate } from '../../services';
import { clearLocalNotification } from '../../helpers';

import styles from './styles';

export default class DeckQuiz extends Component {
  static navigationOptions = {
    title: 'Quiz',
  };

  state = {
    questions: [],
    currentCard: 0,
    totalCards: 0,
    isShowingQuestion: true,
    numCorrect: 0,
  };

  componentDidMount() {
    this.resetQuiz();
  }

  resetQuiz = () => {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    this.setState(() => ({
      questions: deck.questions,
      currentCard: 1,
      totalCards: deck.questions.length,
      numCorrect: 0,
    }));
  };

  toggleQuestionAnswer = () => {
    this.setState(state => ({ isShowingQuestion: !state.isShowingQuestion }));
  };

  onPressCorrect = () => {
    this.setState(state => ({
      currentCard: ++state.currentCard,
      numCorrect: ++state.numCorrect,
    }));
  };

  onPressIncorrect = () => {
    this.setState(state => ({
      currentCard: ++state.currentCard,
    }));
  };

  getPercentageCorrect = () => {
    const floatNumCorrect =
      parseFloat(this.state.numCorrect) / parseFloat(this.state.totalCards);
    const percentageCorrect = floatNumCorrect.toFixed(4) * 100;
    return percentageCorrect;
  };

  getCardQuestion = currentCard => {
    const { questions } = this.state;
    if (
      currentCard === 0 ||
      typeof questions[currentCard - 1] === 'undefined'
    ) {
      return null;
    }
    return questions[currentCard - 1];
  };

  render() {
    const { navigation } = this.props;
    const { currentCard, isShowingQuestion, totalCards } = this.state;
    const currentQuestion = this.getCardQuestion(currentCard);

    if (totalCards === 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.deckTitle}>
            Sorry, you cannot take a quiz because there are no cards in the
            deck.
          </Text>
        </View>
      );
    }

    if (currentCard > totalCards) {
      logTodaysQuizDate();
      clearLocalNotification();

      return (
        <View style={styles.container}>
          <Text style={styles.deckTitle}>
            You scored a {this.getPercentageCorrect()}%
          </Text>
          <View styles={styles.buttonsContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button, styles.startQuizButton]}
              onPress={this.resetQuiz}
            >
              <Text style={styles.buttonTitle}>Restart Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={[styles.button]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.buttonTitle}>Back to Deck</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.deckCardCount}>
          {currentCard} / {totalCards}
        </Text>

        <View styles={styles.buttonsContainer}>
          <Text style={styles.deckTitle}>
            {isShowingQuestion
              ? currentQuestion.question
              : currentQuestion.answer}
          </Text>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.toggleQuestionAnswer}
          >
            <Text style={styles.answerButton}>
              {isShowingQuestion ? 'Answer' : 'Question'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.onPressCorrect}
            style={[styles.button, styles.correctButton]}
          >
            <Text style={styles.buttonTitle}>Correct</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.onPressIncorrect}
            style={[styles.button, styles.inCorrectButton]}
          >
            <Text style={styles.buttonTitle}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
