import { ADD_TO_CART, CLEAR_CART } from "../actions/cartAction";

const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// check variants
const VariantSame = (v1, v2) => {
  if (!v1 && !v2) return true;
  if (!v1 || !v2) return false;
  return v1.name === v2.name && v1.price === v2.price;
};

// const sameVariant = areVariantsEqual(item1.variant, item2.variant);

//check extras
const ExtraSame = (extras1 = [], extras2 = []) => {
  if (extras1.length !== extras2.length) return false;

//name in order
  const sorted1 = [...extras1].sort((a, b) => a.name.localeCompare(b.name));
  const sorted2 = [...extras2].sort((a, b) => a.name.localeCompare(b.name));

// const sorted = extras.sort((a, b) => {
//   const nameA = a.name.toLowerCase();
//   const nameB = b.name.toLowerCase();
//   return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
// });

// const sorted1 = [...extras].sort((a, b) => {
//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

  return sorted1.every((extra, index) => {
    return (
      extra.name === sorted2[index].name &&
      extra.price === sorted2[index].price
    );
  });
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;

      const mainPrice =
        item.variant?.price !== undefined ? item.variant.price : item.basePrice || 0;
      const extrasPrice =
        item.extras?.reduce((sum, extra) => sum + (extra.price || 0), 0) || 0;
      const itemTotalPrice = (mainPrice + extrasPrice) * item.quantity;

      // existing item
      const existingItems = state.items.findIndex(i =>
        i.productID === item.productID &&
        VariantSame(i.variant, item.variant) &&
        ExtraSame(i.extras, item.extras)
      );

      if (existingItems !== -1) {

        const updatedItems = [...state.items];
        updatedItems[existingItems] = {
          ...updatedItems[existingItems],
          quantity: updatedItems[existingItems].quantity + item.quantity,
        };

        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems ,
          totalPrice: Math.round((state.totalPrice + itemTotalPrice) * 100) / 100,
        };
      } else {
        const newItem = { ...item, id: Date.now() + Math.random() };

        return {
          ...state,
          items: [...state.items, newItem],
          totalItems: state.totalItems + item.quantity,
          totalPrice: Math.round((state.totalPrice + itemTotalPrice) * 100) / 100,
        };
      }
    }

    case CLEAR_CART:{
     return initialState;
    }
    
    default:
      return state;
  }
};

export default cartReducer;
