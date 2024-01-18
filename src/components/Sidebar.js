import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category}`}>{category}</Link>
          </p>
        ))}
      
    </div>
  );
};

export default Sidebar;