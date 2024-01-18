import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const ProductDetail = () => {
  const {productId}=useParams()
  const[detail, setDetail]= useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        
        setDetail(res.data);
      } catch (error) {
        console.error('API isteği başarısız:', error);
      }
    };

    fetchData();
  }, []);

console.log(detail);

  return (
      <div className='detail-inside'>
      <h2>{detail?.title}</h2>
      <img src={detail?.image} />
      <p>{detail?.description}</p>
      <p>${detail?.price}</p>
     
    </div>
  );
};

export default ProductDetail;