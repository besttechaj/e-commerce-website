import React, { createContext, useContext, useReducer } from 'react';
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from '../context/Reducers';

//creating a context
const Cart = createContext();
//only renders one type of data hence after reloading/rerendering page will not update any data i.e like image
faker.seed(99);

//here the children is coming from index.js file since we have wrapped it with context
const Context = ({ children }) => {
  //generating fake data using faker package
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.urlLoremFlickr({ category: 'camera' }),
    inStock: faker.helpers.arrayElements([0, 3, 5, 6, 7]),

    fastDelivery: faker.datatype.boolean(),
    rating: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(products);

  //creating reducer ... syntax : const [state,dispatch]=useReducer(reducer,initialState)
  const [state, dispatch] = useReducer(cartReducer, {
    //initial product state
    products: products,
    //initial cart value
    cart: [],
  });

  //creating another reducer for filter data part
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: '',
  });

  return (
    <Cart.Provider
      value={{
        state: state,
        dispatch: dispatch,
        productState: productState,
        productDispatch: productDispatch,
      }}
    >
      {children}
    </Cart.Provider>
  );
};

export default Context;

//fetching/Consuming the passed value  from the Cart.Provider context
//we can access this context by using  useContext i.e consuming after providing state
export const CartState = () => {
  // console.log(useContext(Cart));
  return useContext(Cart);
};
