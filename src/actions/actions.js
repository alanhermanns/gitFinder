import { getAllUserRepos } from '../services/getGHUser';

export const GET_GH_USER_REPOS = 'GET_GH_USER_REPOS';
export const getUserRepos = user => dispatch => {
  dispatch({ type: GH_USER_LOADING });
  return getAllUserRepos(user)
    .then(user => dispatch({
      type: GET_GH_USER_REPOS,
      payload: user
    }));

};
export const GH_USER_LOADING = 'GH_USER_LOADING';
export const loading = () => ({
  type: GH_USER_LOADING,
});


