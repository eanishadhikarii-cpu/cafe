import React from 'react';
import '../styles/menuFilters.css';

const MenuFilters = ({ 
  searchTerm, 
  onSearchChange, 
  vegFilter, 
  onVegFilterChange, 
  priceRange, 
  onPriceRangeChange,
  minPrice,
  maxPrice 
}) => {
  return (
    <div className="menu-filters">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search menu items..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
      </div>
      
      <div className="filter-row">
        <div className="veg-filter">
          <button
            className={`filter-btn ${vegFilter === 'all' ? 'active' : ''}`}
            onClick={() => onVegFilterChange('all')}
          >
            All
          </button>
          <button
            className={`filter-btn veg ${vegFilter === 'veg' ? 'active' : ''}`}
            onClick={() => onVegFilterChange('veg')}
          >
            <span className="veg-dot">●</span> Veg
          </button>
          <button
            className={`filter-btn non-veg ${vegFilter === 'non-veg' ? 'active' : ''}`}
            onClick={() => onVegFilterChange('non-veg')}
          >
            <span className="non-veg-dot">●</span> Non-Veg
          </button>
        </div>
        
        <div className="price-filter">
          <label className="price-label">
            Price: Rs. {priceRange[0]} - Rs. {priceRange[1]}
          </label>
          <div className="price-slider-container">
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[0]}
              onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
              className="price-slider"
            />
            <input
              type="range"
              min={minPrice}
              max={maxPrice}
              value={priceRange[1]}
              onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
              className="price-slider"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuFilters;