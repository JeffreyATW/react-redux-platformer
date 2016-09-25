import actionTypes from '../actionTypes';

export const gameOver = () => ({
  type: actionTypes.GAME_OVER,
});

export const start = () => ({
  type: actionTypes.START,
});

export const restart = () => ({
  type: actionTypes.RESTART,
});

export const setCountdown = count => ({
  type: actionTypes.SET_COUNTDOWN,
  count,
});

export const beginCountdown = () => dispatch => {
  let interval;
  let count = 4;
  const decrement = () => {
    count -= 1;
    if (count === 0) {
      window.clearInterval(interval);
      dispatch(gameOver());
    } else {
      dispatch(setCountdown(count));
    }
  }

  decrement();
  interval = window.setInterval(decrement, 1000);
}