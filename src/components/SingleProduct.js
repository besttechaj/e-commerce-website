import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import { CartState } from '../context/Context';

//We are fetching the passed value using destructure instead of props
const SingleProduct = (props) => {
  //destructuring and consuming the data after providing using CartState function which has useContext() inside it.
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { prod } = props;

  // console.log(`current data inside cart is: `, cart);

  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name} />
      </Card>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: '10px' }}>
          <span>${prod.price.split('.')[0]}</span>
          {prod.fastDelivery ? (
            <div>Fast Delivery</div>
          ) : (
            <div>4 Days Delivery</div>
          )}
          <Rating rating={prod.rating} />
        </Card.Subtitle>
        {
          //.some()-> it will check wether the item is present inside cart or not ... if the item is already present inside my new cart array list then display remove from cart button else display add to cart button to add the item to my new cart array list
          cart.some((p) => p.id === prod.id) ? (
            <Button
              variant='danger'
              onClick={() => {
                dispatch({
                  type: 'REMOVE_FROM_CART',
                  payload: prod,
                });
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              variant='success'
              disabled={!prod.inStock}
              onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  payload: prod,
                });
              }}
            >
              {!prod.inStock ? 'Out Of Stock' : 'Add To Cart'}
            </Button>
          )
        }
      </Card.Body>
    </div>
  );
};

export default SingleProduct;
