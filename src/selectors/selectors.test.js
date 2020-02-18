import { getUser, getRepos, getLoading } from './selectors';

describe('selectors', () => {
  it('should get user', () => {
    let state = {
      user: 'alan',
      loading: true,
      repos: []
    };
    expect(getUser(state)).toEqual('alan');
  });
  it('should get repos', () => {
    let state = {
      user: 'alan',
      loading: true,
      repos: ['thing', 'thing2']
    };
    expect(getRepos(state)).toEqual(['thing', 'thing2']);
  });
  it('should get loading', () => {
    let state = {
      user: 'alan',
      loading: true,
      repos: ['thing', 'thing2']
    };
    expect(getLoading(state)).toBeTruthy();
  });
})
;
