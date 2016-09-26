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

export const addPoints = amount => ({
  type: actionTypes.ADD_POINTS,
  amount,
});

export const setHighScore = score => ({
  type: actionTypes.SET_HIGH_SCORE,
  score,
});

export const score = amount => (dispatch, getState) => {
  dispatch(addPoints(amount));
  const highScore = getState().game.highScore;
  const score = getState().game.score;
  if (score > highScore) {
    window.localStorage.setItem('sixHighScore', score);
    dispatch(setHighScore(score));
  }
}

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