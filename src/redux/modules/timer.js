import moment from 'moment';
const SET_TIME = 'pomodoro-timer/timer/SET_TIME';

const initialState = {
  countdownTime: moment().minute(25).second(0).valueOf()
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state,
        countdownTime: action.payload
      };
    default:
      return state;
  }
}

export function setTime(time) {
  return {
    type: SET_TIME,
    payload: time
  };
}
