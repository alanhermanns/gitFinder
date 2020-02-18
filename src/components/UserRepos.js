import React from 'react';
import { getUserRepos, loading, setUserInState, getUserFromGitHub } from '../actions/actions';
import { getUser, getLoading, getRepos } from '../selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserRepos } from '../services/getGHUser';

const UserRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const repos = useSelector(getRepos);
  const loading = useSelector(getLoading);

  const handleChange = ({ target }) => {
    dispatch(setUserInState(target.value));
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getUserFromGitHub(user));
    dispatch(getUserRepos(user));
  };

  const repoList = repos.map(repo => {
    return (
      <li key={repo.name}>{repo.name}</li>
    );
  });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
        <button>Go</button>
      </form>
      <p>Followers : {user.followers}</p>
      <p>Following : {user.following}</p>
      <p>Profile : {user.html_url}</p>
      <ul>
        {repoList}
      </ul>

    </>
  );
};

export default UserRepos;
