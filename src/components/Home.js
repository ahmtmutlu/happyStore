import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsResponse = await axios.get('https://fakestoreapi.com/products');
        
        setProducts(productsResponse.data);

        const categoriesResponse = await axios.get('https://fakestoreapi.com/products/categories');
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="home-container">
      <aside>
      <Sidebar categories={categories} />
      </aside>
      
      <div className="product-list">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
