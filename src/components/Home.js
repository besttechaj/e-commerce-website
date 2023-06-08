import React from 'react';
import { CartState } from '../context/Context';
import SingleProduct from '../components/SingleProduct';
import '../components/styles.css';
import Filters from './Filters';
const Home = () => {
  const {
    state: { products },
    productState: { sort, byStock, byFastDelivery, byRating, searchQuery },
  } = CartState();

  console.log(byFastDelivery, byRating, byStock, searchQuery);

  //IMPLEMENTING LOGIC FOR FILTERING DATA WHENEVER USER TRY TO FILTER THE DATA
  let transformProducts = () => {
    //copying the original data
    let sortedProducts = products;
    console.log(`sorted products are`, sortedProducts);
    if (sort) {
      //here inbuilt sort function is used to determine the order of the elements, if takes two arguments if the result is negative that means second argument is greater than first argument...if the result is positive that means first argument is greater than the first argument and if the result is zero this means that both the argument value are equal
      sortedProducts = sortedProducts.sort((a, b) => {
        //ascending
        return sort === 'lowToHigh' ? a.price - b.price : b.price - a.price;
      });
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter((prod) => {
        console.log(`products by ratings are`, sortedProducts);
        return prod.rating >= byRating;
      });
    } else {
      console.log(`unable to process rating`);
    }

    //if byStock is false then we gonna display those products which are in stock else if it is true then it will display all products including products which are out of stock
    // if (!byStock) {
    //   return (sortedProducts = sortedProducts.filter((prod) => prod.inStock));
    // } else {
    //   console.log(`unable to process byStock`);
    // }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => {
        console.log(`fast delivery products are `, sortedProducts);
        return prod.fastDelivery;
      });
    } else {
      console.log(`unable to process fast delivery`);
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.name.toLowerCase().includes(searchQuery);
      });
    }

    return sortedProducts;
  };

  //fetching the data from the useContext using useContext provided inside CartState function
  //performing destructure

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
