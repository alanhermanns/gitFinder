import { 
  GET_GH_USER_REPOS,
  GH_USER_LOADING
} from '../actions/actions';

const reducer = (state = {
  loading: true,
  user: null,
}, action) => {
  switch(action.type) {
    case GH_USER_LOADING:
      return { ...state, loading: true };
    case GET_GH_USER_REPOS: 
      return { ...state, loading: false, user: action.payload };
    default : return state;
  }
};

export default reducer;
