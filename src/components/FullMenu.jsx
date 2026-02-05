import React, { useState, useMemo } from 'react';
import { fullMenuData, menuCategories, getMenuByCategory, getSubcategoriesByCategory } from '../data/menuData';
import '../styles/fullMenu.css';

const FullMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredMenuData = useMemo(() => {
    return getMenuByCategory(activeCategory);
  }, [activeCategory]);

  const groupedMenuData = useMemo(() => {
    const grouped = {};
    filteredMenuData.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = {};
      }
      if (!grouped[item.category][item.subcategory]) {
        grouped[item.category][item.subcategory] = [];
      }
      grouped[item.category][item.subcategory].push(item);
    });
    return grouped;
  }, [filteredMenuData]);

  const scrollToHomeMenu = () => {
    const homeMenuSection = document.getElementById('menu');
    if (homeMenuSection) {
      homeMenuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="full-menu" className="section full-menu">
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Complete Menu</h2>
          <p className="menu-subtitle">Explore our full selection of expertly crafted dishes and beverages</p>
        </div>

        {/* Category Filter */}
        <div className="menu-filters">
          <div className="filter-buttons">
            {menuCategories.map(category => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Items Count */}
        <div className="menu-count">
          <p>Showing {filteredMenuData.length} items</p>
        </div>

        {/* Menu Content */}
        <div className="menu-content">
          {Object.keys(groupedMenuData).length === 0 ? (
            <div className="no-items">
              <p>No items found in this category.</p>
            </div>
          ) : (
            Object.entries(groupedMenuData).map(([categoryName, subcategories]) => (
              <div key={categoryName} className="menu-category">
                <h3 className="category-title">{categoryName}</h3>
                
                {Object.entries(subcategories).map(([subcategoryName, items]) => (
                  <div key={subcategoryName} className="menu-subcategory">
                    {subcategoryName !== categoryName && (
                      <h4 className="subcategory-title">{subcategoryName}</h4>
                    )}
                    
                    <div className="menu-items-grid">
                      {items.map((item, index) => (
                        <div key={index} className="menu-item-card">
                          <div className="menu-item-info">
                            <h5 className="menu-item-name">{item.name}</h5>
                          </div>
                          <div className="menu-item-price">Rs. {item.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Back to Featured Menu */}
        <div className="menu-back">
          <button className="btn btn-outline" onClick={scrollToHomeMenu}>
            ↑ Back to Featured Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default FullMenu;