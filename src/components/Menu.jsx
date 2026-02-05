import React, { useState, useEffect } from 'react';
import '../styles/menu.css';

const Menu = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeType, setActiveType] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const element = document.getElementById('menu');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const featuredItems = [
    { name: "Black Coffee", price: "90 / 130", type: "veg", category: "Coffee" },
    { name: "Steam Momo", price: "160 / 200", type: "Veg / Chicken", category: "MOMO" },
    { name: "Chicken Curry", price: "380", type: "non-veg", category: "Main Course" },
    { name: "Virgin Mojito", price: "290", type: "veg", category: "Mocktails" },
    { name: "Paneer Chilly", price: "350", type: "veg", category: "Appetizers" },
    { name: "Biryani", price: "310 / 390", type: "Veg / Chicken", category: "Main Course" },
    { name: "Iced Americano", price: "120 / 150", type: "veg", category: "Coffee" },
    { name: "Chicken Lollipop", price: "400", type: "non-veg", category: "Appetizers" },
    { name: "Strawberry Milkshake", price: "220", type: "veg", category: "Shakes" },
    { name: "Mutton Taas", price: "480", type: "non-veg", category: "Main Course" },
    { name: "French Fries", price: "190", type: "veg", category: "Appetizers" },
    { name: "Chicken Sandwich", price: "350", type: "non-veg", category: "Sandwich" }
  ];

  const getFilteredItems = () => {
    if (activeType === 'all') return featuredItems;
    
    return featuredItems.filter(item => {
      if (activeType === 'veg') {
        return item.type === 'veg' || item.type.includes('Veg');
      }
      if (activeType === 'non-veg') {
        return item.type === 'non-veg' || item.type.includes('Chicken');
      }
      return true;
    });
  };

  const getDisplayItems = () => {
    const filteredItems = getFilteredItems();
    return showAll ? filteredItems : filteredItems.slice(0, 8);
  };

  const handleToggleMenu = () => {
    if (showAll) {
      // Scroll to menu section when collapsing
      document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    }
    setShowAll(!showAll);
  };

  const getVegIcon = (type) => {
    if (type === 'veg') return '●';
    if (type === 'non-veg') return '●';
    return '';
  };

  return (
    <section id="menu" className={`section menu luxury-menu ${isVisible ? 'visible' : ''}`}>
      <div className="container">
        <div className="menu-header">
          <h2 className="menu-title">Our Menu</h2>
          <p className="menu-subtitle">A curated selection of thoughtfully prepared cuisine</p>
        </div>
        
        <div className="luxury-filters">
          <div className="type-pills">
            {['all', 'veg', 'non-veg'].map(type => (
              <button 
                key={type}
                className={`type-pill ${activeType === type ? 'active' : ''}`}
                onClick={() => setActiveType(type)}
              >
                {type === 'all' ? 'All' : type === 'non-veg' ? 'Non-Veg' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="featured-showcase">
          <h3 className="featured-title">{showAll ? 'Complete Menu' : 'Featured Selection'}</h3>
          
          <div className={`luxury-featured-grid ${showAll ? 'expanded' : 'preview'}`}>
            {getDisplayItems().map((item, index) => (
              <div key={index} className={`luxury-featured-item ${showAll && index >= 8 ? 'fade-in' : ''}`}>
                <div className="item-row">
                  <div className="item-left">
                    <span className={`veg-indicator ${item.type === 'veg' ? 'veg' : item.type === 'non-veg' ? 'non-veg' : 'mixed'}`}>
                      {getVegIcon(item.type)}
                    </span>
                    <span className="item-name">{item.name}</span>
                  </div>
                  <div className="item-divider"></div>
                  <div className="item-price">Rs.{item.price}</div>
                </div>
                {item.type !== 'veg' && item.type !== 'non-veg' && (
                  <div className="item-type">{item.type}</div>
                )}
                <div className="item-category">{item.category}</div>
              </div>
            ))}
          </div>
          
          {getFilteredItems().length > 8 && (
            <div className="menu-toggle-section">
              <button 
                className="menu-toggle-btn" 
                onClick={handleToggleMenu}
                aria-label={showAll ? 'Show less menu items' : 'View all menu items'}
              >
                {showAll ? 'Show Less Menu' : 'View All Menu'}
                <span className="btn-icon" aria-hidden="true">{showAll ? '↑' : '↓'}</span>
              </button>
              {!showAll && (
                <p className="items-count">
                  Showing {Math.min(8, getFilteredItems().length)} of {getFilteredItems().length} items
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Menu;