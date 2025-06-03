import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import subCategoryReducer from './subCategoryReducer';
import productReducer from './ProductReducer';
import cartReducer from './cartReducer';
import { languageReducer } from './languageReducer';
// import popupReducer from './popupReducer';

const rootReducer = combineReducers({
  selectedCategory: categoryReducer,
  selectedSubCategory: subCategoryReducer,
  selectedProduct : productReducer,
  // popupProduct: popupReducer,
    cart : cartReducer,
      language: languageReducer,




});

export default rootReducer;
