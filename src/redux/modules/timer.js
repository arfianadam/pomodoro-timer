const SET_TIME = 'pomodoro-timer/timer/SET_TIME';

const initialState = {
  countdownTime: ''
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_TIME:
      return {
        ...state
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
