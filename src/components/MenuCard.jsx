import React from 'react';
import '../styles/menuCard.css';

const MenuCard = ({ item }) => {
  return (
    <div className="menu-card">
      <div className="menu-card-header">
        <div className="veg-indicator">
          <span className={`veg-dot ${item.isVeg ? 'veg' : 'non-veg'}`}>●</span>
        </div>
        <div className="menu-card-price">Rs. {item.price}</div>
      </div>
      <h3 className="menu-card-name">{item.name}</h3>
      <p className="menu-card-category">{item.category}</p>
    </div>
  );
};

export default MenuCard;