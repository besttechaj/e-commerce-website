import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from '../components/SingleProduct';
import '../components/styles.css';
import Filters from './Filters';
const Home = () => {
  //fetching the data from the useContext using useContext provided inside CartState function
  //performing destructure
  const {
    state: { products },
  } = CartState();
  // console.log(products);

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
