import { 
  GET_GH_USER_REPOS,
  GH_USER_LOADING,
  SET_USER_IN_STATE,
  GET_GH_USER
} from '../actions/actions';

const initialState =  {
  loading: true,
  user: 'alanhermanns',
  repos: []
};
const reducer = (state = initialState, action) => {
  console.log(action);
  switch(action.type) {
    case GET_GH_USER :
      return { ...state, loading: false, user: action.payload };
    case GH_USER_LOADING:
      return { ...state, loading: true };
    case GET_GH_USER_REPOS:
      return { ...state, loading: false, repos: action.payload };
    default : return state;
    case SET_USER_IN_STATE:
      return { ...state, user: action.payload };
  }
};

export default reducer;
