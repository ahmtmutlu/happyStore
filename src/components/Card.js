import React from 'react';

const Card = ({ product }) => {
  const { image, title, price } = product;

  return (
    <div className="product-card">
      <img src={image}  className="product-image" />
      <h3 className="product-title">{title.slice(0,15)+".."}</h3>
      <p className="product-price">{price}$</p>
    </div>
  );
};

export default Card;