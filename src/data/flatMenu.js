// Flattened menu data extracted from menu.json
// Each item maintains exact name and price from the original menu
// Organized with category and subcategory for grouping

export const flatMenuData = [];

// Category mapping for main categories
export const mainCategories = [
  "All"
];

// Get unique categories from data
export const getCategories = () => {
  const categories = new Set();
  flatMenuData.forEach(item => {
    categories.add(item.category);
  });
  return Array.from(categories);
};

// Get subcategories for a given category
export const getSubcategoriesByCategory = (category) => {
  if (category === "All") {
    const subcats = new Set();
    flatMenuData.forEach(item => {
      subcats.add(item.subcategory);
    });
    return Array.from(subcats);
  }
  const subcats = new Set();
  flatMenuData.forEach(item => {
    if (item.category === category) {
      subcats.add(item.subcategory);
    }
  });
  return Array.from(subcats);
};

// Filter items by category
export const filterByCategory = (category) => {
  if (category === "All") return flatMenuData;
  return flatMenuData.filter(item => item.category === category);
};

// Get featured items for home page (diverse selection)
export const getFeaturedItems = () => {
  return [];
};
