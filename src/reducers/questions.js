import {ADD_QUESTIONS, ADD_QUESTION} from '../constants/questions';

const initialState = {
  questions: [],
  question: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUESTIONS:
      return {...state, questions: action.payload};
    case ADD_QUESTION:
      return {...state, question: action.payload};
    default:
      return {...state};
  }
};
