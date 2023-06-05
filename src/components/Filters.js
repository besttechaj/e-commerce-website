import React, { useState } from 'react';
import '../components/styles.css';
import { Form, Button } from 'react-bootstrap';
import Rating from './Rating';
const Filters = () => {
  const [rate, setRate] = useState();

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
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Descending'
          type='radio'
          id={`inline-2`}
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Include Out Of Stock'
          type='checkbox'
          id={`inline-3`}
        />
      </span>
      <span>
        <Form.Check
          inline
          name='group1'
          label='Fast Delivery Only'
          type='checkbox'
          id={`inline-4`}
        />
      </span>
      <span>
        <label style={{ paddingRight: '10px' }}>Rating:</label>
        <Rating
          rating={rate}
          style={{ cursor: 'pointer' }}
          //here we are receiving i as an argument hence using callback function to set rate from the Rating component
          onClick={(i) => {
            setRate(i + 1);
          }}
        />
      </span>
      <Button variant='light'>Clear Filters</Button>
    </div>
  );
};

export default Filters;
