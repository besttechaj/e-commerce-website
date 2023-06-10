import React from 'react';
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Nav,
  Badge,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
  //destructuring and consuming the data after providing using CartState function which has useContext() inside it.
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{ height: '80px' }}>
      {/* importing Container to align all other inside a container */}
      <Container>
        {/* Here navbar.brand is our logo */}
        <Navbar.Brand>
          <Link to='/'>Shopping Cart</Link>
        </Navbar.Brand>
        {/* adding a search  */}
        <Navbar.Text className='search'>
          {/* adding an input tag */}
          <FormControl
            style={{ width: 500 }}
            placeholder='Search a product'
            className='m-auto'
            onChange={(e) => {
              productDispatch({
                type: 'FILTER_BY_SEARCH',
                payload: e.target.value,
              });
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright='true'>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />

              <Badge className='ml-2'>{cart.length}</Badge>
              <Dropdown.Menu
                style={{
                  minWidth: 370,
                  backgroundColor: '#343a40',
                  color: 'white',
                }}
                className='dropdown-menu-right'
              >
                {cart.length > 0 ? (
                  <>
                    {cart.map((prod) => (
                      <span className='cartitem' key={prod.id}>
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className='cartItemImg'
                        />
                        <div className='cartItemDetail'>
                          <span>{prod.name}</span>
                          <span>${prod.price.split('.')[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize='20px'
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: prod,
                            });
                          }}
                        />
                      </span>
                    ))}
                    <Link to='/cart'>
                      <Button
                        style={{
                          width: '100%',
                          marginBottom: '0px',
                        }}
                      >
                        Go to Cart
                      </Button>
                    </Link>
                  </>
                ) : (
                  <span style={{ padding: 10 }}>Cart is Empty!</span>
                )}
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
