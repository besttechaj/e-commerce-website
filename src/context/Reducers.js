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

    case 'CHANGE_CART_QTY':
      //update the item quantity
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
    default:
      //return the original state
      return state;
  }
};

//logic for another reducer
export const productReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      //updating the sorting value
      return { ...state, sort: action.payload };
    case 'FILTER_BY_STOCK':
      //inverting the initial state from false to true and storing it inside byStock variable
      return { ...state, byStock: !state.byStock };
    case 'FILTER_BY_DELIVERY':
      //inverting the initial state from false to true and storing it inside byFastDelivery variable
      return { ...state, byFastDelivery: !state.byFastDelivery };
    case 'FILTER_BY_RATING':
      //fetching the value and storing it inside byRating
      return { ...state, byRating: action.payload };
    case 'FILTER_BY_SEARCH':
      //setting all the above inputs to their initial state
      return { ...state, searchQuery: action.payload };
    case 'CLEAR_FILTERS':
      return {
        byStock: false,
        byFastDekivery: false,
        byRating: 0,
        searchQuery: '',
      };
    default:
      return state;
  }
};
