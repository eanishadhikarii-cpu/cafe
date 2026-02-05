import React, { useState } from 'react';
import { featuredMenuItems, fullMenuData } from '../data/menuData';
import '../styles/homeMenu.css';

const HomeMenu = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const toggleFullMenu = () => {
    setShowFullMenu(!showFullMenu);
  };

  const groupedMenuData = () => {
    const grouped = {};
    fullMenuData.forEach(item => {
      if (!grouped[item.category]) grouped[item.category] = {};
      if (!grouped[item.category][item.subcategory]) grouped[item.category][item.subcategory] = [];
      grouped[item.category][item.subcategory].push(item);
    });
    return grouped;
  };

  return (
    <section id="menu" className="section home-menu">
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Our Menu</h2>
        </div>

        <div className="featured-menu-grid">
          {featuredMenuItems.map((item, index) => (
            <div key={index} className="menu-item-card">
              <div className="menu-item-info">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-category">{item.category}</span>
              </div>
              <div className="menu-item-price">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="menu-cta">
          <button className="btn btn-primary" onClick={toggleFullMenu}>
            {showFullMenu ? 'Show Less' : 'See Full Menu'}
          </button>
        </div>

        {showFullMenu && (
          <div className="full-menu-section">
            <h3 className="full-menu-title">Complete Menu</h3>
            {Object.entries(groupedMenuData()).map(([category, subcategories]) => (
              <div key={category} className="menu-category">
                <h4 className="category-title">{category}</h4>
                {Object.entries(subcategories).map(([subcategory, items]) => (
                  <div key={subcategory} className="menu-subcategory">
                    <h5 className="subcategory-title">{subcategory}</h5>
                    <div className="menu-items-grid">
                      {items.map((item, index) => (
                        <div key={index} className="menu-item-card">
                          <div className="menu-item-info">
                            <h6 className="menu-item-name">{item.name}</h6>
                          </div>
                          <div className="menu-item-price">{item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeMenu;