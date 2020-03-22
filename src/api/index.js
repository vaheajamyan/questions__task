const API_URL = 'https://api.myjson.com/bins/8561o';

export const getQuestions = async () => {
  const response = await fetch(API_URL);
  const responseJson = await response.json();

  return responseJson;
};

export const getQuestion = async url => {
  const response = await fetch(url);
  const responseJson = await response.json();

  return responseJson;
};
