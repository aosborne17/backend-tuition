import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://localhost:5000/products');
      if (response.status === 200) {
        console.log(response.data);
        setProducts(response.data);
      } else {
        console.log('Error Fetching your products');
      }

      //   const response = await fetch('http://localhost:5000/products');
      //   const responseJson = await response.json();
      //   console.log(responseJson);
      //   setProducts(responseJson);
    }

    // we must then call the function
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <p>All Products</p>
        {products &&
          products.map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>

      <ul>
        <p>All our items under $100!</p>
        {products &&
          products
            .filter((product) => product.price < 100)
            .map((product) => <li key={product.id}>{product.name}</li>)}
      </ul>
    </div>
  );
};

export default ProductList;
