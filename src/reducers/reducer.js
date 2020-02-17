import { GET_GH_USER } from '../actions/actions';

const reducer = (state, action) => {
  switch(action.type) {
    case GET_GH_USER: 
      return { ...state, user: action.payload };
    default : return state;
  }
};

export default reducer;
