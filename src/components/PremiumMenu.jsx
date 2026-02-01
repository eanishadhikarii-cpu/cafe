import React, { useState, useEffect, useMemo } from 'react';
import { menuData, categories } from '../data/menuData';
import MenuCard from './MenuCard';
import CategorySlider from './CategorySlider';
import MenuFilters from './MenuFilters';
import '../styles/premiumMenu.css';

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [vegFilter, setVegFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 500]);

  // Get min and max prices from menu data
  const minPrice = useMemo(() => Math.min(...menuData.map(item => item.price)), []);
  const maxPrice = useMemo(() => Math.max(...menuData.map(item => item.price)), []);

  useEffect(() => {
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById('menu');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Filtered menu items using useMemo for optimization
  const filteredItems = useMemo(() => {
    return menuData.filter(item => {
      // Category filter
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;
      
      // Search filter
      const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Veg filter
      const vegMatch = vegFilter === 'all' || 
        (vegFilter === 'veg' && item.isVeg) || 
        (vegFilter === 'non-veg' && !item.isVeg);
      
      // Price filter
      const priceMatch = item.price >= priceRange[0] && item.price <= priceRange[1];
      
      return categoryMatch && searchMatch && vegMatch && priceMatch;
    });
  }, [activeCategory, searchTerm, vegFilter, priceRange]);

  return (
    <section id="menu" className={`section premium-menu ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="menu-header">
          <h2 className="menu-title">Our Premium Menu</h2>
          <p className="menu-subtitle">Discover our carefully curated selection of artisan cuisine</p>
        </div>
        
        <CategorySlider 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <MenuFilters 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          vegFilter={vegFilter}
          onVegFilterChange={setVegFilter}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
          minPrice={minPrice}
          maxPrice={maxPrice}
        />
        
        <div className="menu-results">
          <p className="results-count">
            {filteredItems.length} item{filteredItems.length !== 1 ? 's' : ''} found
          </p>
          
          <div className="menu-grid">
            {filteredItems.map(item => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="no-results">
              <p>No items match your current filters.</p>
              <button 
                className="reset-filters-btn"
                onClick={() => {
                  setActiveCategory('All');
                  setSearchTerm('');
                  setVegFilter('all');
                  setPriceRange([minPrice, maxPrice]);
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;