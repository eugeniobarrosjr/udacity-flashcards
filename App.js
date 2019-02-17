import React, { Component } from 'react';
import Routes from './src/routes';

import { dateIsToday } from './src/utils';
import { getLastQuizDate } from './src/services';
import { setLocalNotification } from './src/helpers';

export default class App extends Component {
  componentDidMount() {
    getLastQuizDate().then(lastQuizDate => {
      if (lastQuizDate === null || !dateIsToday(lastQuizDate)) {
        setLocalNotification();
      }
    });
  }
  render() {
    return <Routes />;
  }
}
