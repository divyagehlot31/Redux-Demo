import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './ProductReducer';
// import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  selectedCategory: categoryReducer,
  selectedSubCategory: subCategoryReducer,
  selectedProduct : productReducer
  // popupProduct: popupReducer,
});

export default rootReducer;
