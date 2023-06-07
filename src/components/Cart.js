import React, { useState, useEffect } from 'react';
import { CartState } from '../context/Context';
import { Button, Col, Form, Image, ListGroup, Row } from 'react-bootstrap';
import Rating from '../components/Rating';
import { AiFillDelete } from 'react-icons/ai';
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
          (accumulator =
            accumulator + Number(currentState.price) * currentState.qty),
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
              return (
                <>
                  <ListGroup.Item key={prod.id}>
                    <Row>
                      <Col md={2}>
                        <Image src={prod.image} alt={prod.name} fluid rounded />
                      </Col>
                      <Col md={2}>
                        <span>{prod.name}</span>
                      </Col>
                      <Col md={2}>${prod.price}</Col>
                      <Col md={2}>
                        <Rating rating={prod.rating} />
                      </Col>
                      <Col md={2}>
                        <Form.Control
                          as='select'
                          value={prod.qty}
                          onChange={(e) => {
                            dispatch({
                              type: 'CHANGE_CART_QTY',
                              payload: {
                                id: prod.id,
                                qty: e.target.value,
                              },
                            });
                          }}
                        >
                          {/* 
                          not working due to faker.random.arrayElement is depricated 
                          {[...Array(prod.inStock).keys()].map((x) => (
                            <option key={x + 1}>{x + 1}</option>
                          ))} */}
                          <option value='1'>1</option>
                          <option value='2'>2</option>
                          <option value='3'>3</option>
                          <option value='4'>4</option>
                          <option value='5'>5</option>
                          <option value='6'>6</option>
                          <option value='7'>7</option>
                          <option value='8'>8</option>
                          <option value='9'>9</option>
                          <option value='10'>10</option>
                        </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button
                          type='button'
                          variant='light'
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod,
                            });
                          }}
                        >
                          <AiFillDelete fontSize='20px' />
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </>
              );
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
