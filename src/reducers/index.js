import {combineReducers} from 'redux';
import questions from './questions';

export default function getRootReducer(navReducer) {
  return combineReducers({
    nav: navReducer,
    questions,
  });
}
