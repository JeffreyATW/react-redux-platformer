import actionTypes from '../actionTypes';

let countdownInterval;

export const gameOver = () => ({
  type: actionTypes.GAME_OVER,
});

export const start = () => ({
  type: actionTypes.START,
});

export const setCountdown = count => ({
  type: actionTypes.SET_COUNTDOWN,
  count,
});

export const actuallyRestart = () => ({
  type: actionTypes.RESTART,
})

export const restart = () => dispatch => {
  clearInterval(countdownInterval);
  dispatch(actuallyRestart());
};

export const beginCountdown = () => dispatch => {
  clearInterval(countdownInterval);
  let count = 4;
  const decrement = () => {
    count -= 1;
    if (count === 0) {
      window.clearInterval(countdownInterval);
      dispatch(gameOver());
    } else {
      dispatch(setCountdown(count));
    }
  }

  decrement();
  countdownInterval = window.setInterval(decrement, 1000);
}