import React, { Component } from 'react';
import Timer from 'containers/Timer';
import styles from './Home.scss';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.Home}>
        <header>
          <h1>Pomodoro Timer</h1>
        </header>
        <Timer />
      </div>
    );
  }
}
