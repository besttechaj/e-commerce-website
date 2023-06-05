import React from 'react';
import {
  Navbar,
  Container,
  FormControl,
  Dropdown,
  Nav,
  Badge,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  return (
    <Navbar
      bg='dark'
      variant='dark'
      style={{ height: '80px', border: '2px solid red' }}
    >
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
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignright='true'>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px' />

              <Badge className='ml-2'>{0}</Badge>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              </Dropdown.Menu>
            </Dropdown.Toggle>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
