import React from 'react';
import { useSelector } from 'react-redux';
import { getGHUserFromState } from '../selectors/selectors';
import { getGHUser } from '../actions/actions';

const UserRepos = () => {

  return (
    <>
      <input onSubmit={() => {
        event.preventDefault;
        getGHUserFromState(getGHUser(event.target.value));}
      }/>
      <section>{}</section>
    </>
  );
};

export default UserRepos;
