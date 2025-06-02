import { SET_CATEGORY } from '../actions/categoryActions.jsx';

const initialState = 1;

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
