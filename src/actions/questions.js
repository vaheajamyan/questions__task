import {ADD_QUESTIONS, ADD_QUESTION} from '../constants/questions';
import {getQuestions, getQuestion} from '../api';

export const addQuestions = () => dispatch => {
  getQuestions()
    .then(data =>
      dispatch({
        type: ADD_QUESTIONS,
        payload: data,
      }),
    )
    .catch(err => console.log(err));
};

export const addQuestion = url => dispatch => {
  dispatch({
    type: ADD_QUESTION,
    payload: null,
  });
  getQuestion(url)
    .then(data =>
      dispatch({
        type: ADD_QUESTION,
        payload: data,
      }),
    )
    .catch(err => console.log(err));
};
