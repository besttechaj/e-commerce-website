//initializing reducer

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      //Adding the items

      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case 'REMOVE_FROM_CART':
      //removing the items
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      //return the original state
      return state;
  }
};
