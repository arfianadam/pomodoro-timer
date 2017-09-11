import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Timer.scss';

@connect(state => ({
  countdownTime: state.timer.countdownTime
}))
export default class Timer extends Component {
  static propTypes = {
    countdownTime: PropTypes.string
  }

  static defaultProps = {
    countdownTime: ''
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { countdownTime } = this.props;
    return (
      <div className={styles.Timer}>
        <input type="number" />
        {countdownTime}
      </div>
    );
  }
}
