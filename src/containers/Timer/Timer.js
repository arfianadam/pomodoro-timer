import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setTime } from 'redux/modules/timer';
import styles from './Timer.scss';

@connect(state => ({
  countdownTime: state.timer.countdownTime
}))
export default class Timer extends Component {
  static propTypes = {
    countdownTime: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static defaultProps = {
    countdownTime: moment().minute(25).second(0).valueOf()
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = type => e => {
    const { dispatch, countdownTime } = this.props;
    const newLength = e.target.value.toString().length;
    console.log(newLength);
    if (type === 'second') {
      if (newLength === 3) {
        this[`${type}Box`].blur();
      }
      if (newLength < 4 && (e.target.value < 60)) {
        dispatch(setTime(moment(countdownTime)[type](e.target.value).valueOf()));
      }
    } else if (type === 'minute') {
      if (newLength === 2) {
        this[`${type}Box`].blur();
      }
      dispatch(setTime(moment(countdownTime)[type](e.target.value).valueOf()));
    }
  }

  handleClick = type => e => {
    e.preventDefault();
    if (type === 'minute') {
      this.minuteBox.setSelectionRange(0, this.minuteBox.value.length);
    } else {
      this.secondBox.setSelectionRange(0, this.secondBox.value.length);
    }
  }

  render() {
    const { countdownTime } = this.props;
    return (
      <div className={styles.Timer}>
        <div className={styles.countdown}>
          <input
            className={styles.minute}
            type="text"
            ref={ref => { this.minuteBox = ref; }}
            value={moment(countdownTime).minute()}
            onChange={this.handleChange('minute')}
            onClick={this.handleClick('minute')} />
          <div className={styles.divider}>:</div>
          <input
            className={styles.second}
            type="text"
            ref={ref => { this.secondBox = ref; }}
            value={moment(countdownTime).format('ss')}
            onChange={this.handleChange('second')}
            onClick={this.handleClick('second')} />
        </div>
      </div>
    );
  }
}
