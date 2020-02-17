import { getAllUserRepos } from '../services/getGHUser';

export const GET_GH_USER = 'GET_GH_USER';
export const getGHUser = (username) => dispatch => {
  return getAllUserRepos(username)
    .then(user => {
      dispatch({
        type: GET_GH_USER,
        payload: user
      });
    });
};

export const GET_GH_USER_LOADING = 'GET_GH_USER_LOADING';
export const getGHUserLoading = () => dispatch => {
  dispatch({
    type: GET_GH_USER_LOADING
  });
};
