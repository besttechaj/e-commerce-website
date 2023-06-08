import React from 'react';
import '../components/styles.css';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';
import { CartState } from '../context/Context';
const Filters = () => {
  const {
    productState: { byStock, byFastDelivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartState();

  console.log(byStock, byFastDelivery, sort, byRating, searchQuery);

  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span>
        {/* importing Form.check from bootstrap  */}
        <Form.Check
          inline
          label='Ascending'
          type='radio'
          name='group1'
          id={`inline-1`}
          onChange={() => {
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'lowToHigh',
            });
          }}
          //triggering one event
          checked={sort === 'lowToHigh' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Descending'
          type='radio'
          id={`inline-2`}
          onChange={() => {
            productDispatch({
              type: 'SORT_BY_PRICE',
              payload: 'highToLow',
            });
          }}
          //triggering one event
          checked={sort === 'highToLow' ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Include Out Of Stock'
          type='checkbox'
          id={`inline-3`}
          onChange={() => {
            productDispatch({
              type: 'FILTER_BY_STOCK',
            });
          }}
          //if it is true then display checked else unchecked
          checked={byStock}
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Fast Delivery Only'
          type='checkbox'
          id={`inline-4`}
          onChange={() => {
            productDispatch({
              type: 'FILTER_BY_DELIVERY',
            });
          }}
          //if it is true then display checked else unchecked
          checked={byFastDelivery}
        />
      </span>
      <span>
        <label style={{ paddingRight: '10px' }}>Rating:</label>
        <Rating
          rating={byRating}
          style={{ cursor: 'pointer' }}
          //here we are receiving i as an argument hence using callback function to set rate from the Rating component
          onClick={(i) => {
            productDispatch({
              type: 'FILTER_BY_RATING',
              payload: i + 1,
            });
          }}
        />
      </span>
      <Button
        variant='light'
        //setting all the above inputs to their initial state
        onClick={() =>
          productDispatch({
            type: 'CLEAR_FILTERS',
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
