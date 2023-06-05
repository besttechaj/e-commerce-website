import React from 'react';
import { CartState } from '../context/Context';
const Cart = () => {
  //destructuring and consuming the data after providing using CartState function which has useContext() inside it.
  const {
    state: { cart },
    dispatch,
  } = CartState();
  return <div>{cart.length}</div>;
};

export default Cart;
