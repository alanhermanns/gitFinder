import reducer from './reducer';
import { GET_GH_USER, GH_USER_LOADING, GET_GH_USER_REPOS } from '../actions/actions';

describe(reducer, () => {
  it('should set a user with get a user', () => {
    let initialState =  {
      loading: true,
      user: 'alanhermanns',
      repos: []
    };

    expect(reducer(initialState, { type: GET_GH_USER, payload : 'alan' })).toEqual({
      loading: false,
      user: 'alan',
      repos: []
    });
  });
  it('should set loading', () => {
    let initialState =  {
      loading: false,
      user: 'alanhermanns',
      repos: []
    };

    expect(reducer(initialState, { type: GH_USER_LOADING })).toEqual({
      loading: true,
      user: 'alanhermanns',
      repos: []
    });
  });
  it('should get user repos', () => {
    let initialState =  {
      loading: true,
      user: 'alanhermanns',
      repos: []
    };

    expect(reducer(initialState, { type: GET_GH_USER_REPOS, payload : [1, 2, 3, 4] })).toEqual({
      loading: false,
      user: 'alanhermanns',
      repos: [1, 2, 3, 4]
    });
  });
})
;

//I know it updates the username
