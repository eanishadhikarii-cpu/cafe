import React from 'react';
import '../styles/categorySlider.css';

const CategorySlider = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="category-slider">
      <div className="category-slider-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;