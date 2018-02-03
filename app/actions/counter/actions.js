import { INCREMENT, DECREMENT } from './actionTypes';

export const Increment = () => (
  dispatch => {
    dispatch(increment());
  }
);

export const Decrement = () => (
  dispatch => {
    dispatch(decrement());
  }
);

const increment = () => ({
  type: INCREMENT
});

const decrement = () => ({
  type: DECREMENT
});
