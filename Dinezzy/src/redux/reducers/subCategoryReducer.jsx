import { SET_SUBCATEGORY } from '../actions/subCategoryActions.jsx';

const initialState = 7;

const subCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUBCATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default subCategoryReducer;

