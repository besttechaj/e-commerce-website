import React, { useState, useEffect } from 'react';
import { CartState } from '../context/Context';
import { Button, ListGroup } from 'react-bootstrap';
const Cart = () => {
  //destructuring and consuming the data after providing using CartState function which has useContext() inside it.
  const {
    state: { cart },
    dispatch,
  } = CartState();

  //logic to add the total price
  const [total, setTotal] = useState();

  //useEffect -> to update the price whenever there is some change in cart data
  useEffect(() => {
    //syntax .reduce() -> array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
    setTotal(
      cart.reduce(
        (accumulator, currentState) =>
          //here accumulator is used to store the result hence declaring accumulator equals to zero
          //currentState is the value from the cart
          //Number is used to convert the string value into int
          (accumulator = accumulator + Number(currentState.price)),
        0
      )
    );
    //whenever our cart variable is changed this useEffect will be called
  }, [cart]);

  return (
    console.log(cart),
    (
      <div className='home'>
        <div className='productContainer'>
          <ListGroup>
            {cart.map((prod) => {
              return <span>{prod.name}</span>;
            })}
          </ListGroup>
        </div>
        <div className='filters summary'>
          <span className='title'>Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: '700', fontSize: '20px' }}>
            Total: ${total}
          </span>
          <Button type='button' disabled={cart.length === 0}>
            Proceed To Checkout
          </Button>
        </div>
      </div>
    )
  );
};

export default Cart;
