import { ADD_TO_CART, CLEAR_CART } from '../actions/cartAction';

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newItem = action.payload;
      
      const existingItemIndex = state.items.findIndex(item => {
        const sameProduct = item.productId === newItem.productId;
        const sameVariant = JSON.stringify(item.variant) === JSON.stringify(newItem.variant);
        const sameExtras = JSON.stringify(item.extras?.sort()) === JSON.stringify(newItem.extras?.sort());
        
        return sameProduct && sameVariant && sameExtras;
      });
      
      if (existingItemIndex !== -1) {

        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + newItem.quantity
        };
        
        const mainPrice = (newItem.variant && newItem.variant.price !== undefined) 
          ? newItem.variant.price 
          : (newItem.basePrice || 0);
        
        const extrasPrice = newItem.extras?.reduce((sum, extra) => sum + (extra.price || 0), 0) || 0;
        const additionalPrice = (mainPrice + extrasPrice) * newItem.quantity;
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + newItem.quantity,
          totalPrice: Math.round((state.totalPrice + additionalPrice) * 100) / 100,
        };
      } else {

        const mainPrice = (newItem.variant && newItem.variant.price !== undefined) 
          ? newItem.variant.price 
          : (newItem.basePrice || 0);
        
        const extrasPrice = newItem.extras?.reduce((sum, extra) => sum + (extra.price || 0), 0) || 0;
        const itemTotalPrice = (mainPrice + extrasPrice) * newItem.quantity;
        
        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + newItem.quantity,
          totalPrice: Math.round((state.totalPrice + itemTotalPrice) * 100) / 100,
        };
      }
    }
    
    case CLEAR_CART: {
      return initialState;
    }
    
    default:
      return state;
  }
};

export default cartReducer;