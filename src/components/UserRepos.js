import React, { useState, useEffect } from 'react';
import { getUserRepos, loading, setUserInState } from '../actions/actions';
import { getUser, getLoading } from '../selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUserRepos } from '../services/getGHUser';

const UserRepos = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const loading = useSelector(getLoading);


  // useEffect(() => {
  //   console.log('!!!!!!');
  //   dispatch(loading);
  //   dispatch(getUserRepos(userName, dispatch));
  // }, []);

  const handleChange = ({ target }) => {
    dispatch(setUserInState(target.value));
  };
  const handleSubmit = event => {
    event.preventDefault();
    dispatch(getUserRepos(user));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}></input>
        <button>Go</button>
      </form>
    </>
  );
};

export default UserRepos;
