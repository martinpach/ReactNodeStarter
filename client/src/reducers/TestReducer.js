import { TEST_TYPE } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TEST_TYPE:
      return { test: action.payload };
    default:
      return state;
  }
}