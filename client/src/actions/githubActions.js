import axios from 'axios';
import {
  SEARCH_USERS,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_LOADING
} from './types';

let githubClientId;
let githubClientSecrect;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecrect = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = '727a25a43434f4b52fad';
  githubClientSecrect = 'e1d7e46e4c07bdd62eeb29a638f5733271c51e72';
  // githubClientId = process.env.GITHUB_CLIENT_ID;
  // githubClientSecrect = process.env.GITHUB_CLIENT_SECRET;
}

// Search github users
export const searchUsers = text => async dispatch => {
  dispatch(setLoading());
  const response = await axios.get(
    `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecrect}`
  );
  setTimeout(() => {
    dispatch({
      type: SEARCH_USERS,
      payload: response.data.items
    });
  }, 200);
};

// Get specific user's info
export const getUser = login => async dispatch => {
  const response = await axios.get(
    `https://api.github.com/users/${login}?client_id=${githubClientId}&client_secret=${githubClientSecrect}`
  );

  dispatch({
    type: GET_USER,
    payload: response.data
  });
};

// Get specific user's repository
export const getRepos = login => async dispatch => {
  const response = await axios.get(
    `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecrect}`
  );

  dispatch({
    type: GET_REPOS,
    payload: response.data
  });
};

// Clear user from state
export const clearUsers = () => {
  return {
    type: CLEAR_USERS
  };
};

// Set Loading
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
