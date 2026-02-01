export const menuData = [
  // Coffee
  { id: 1, name: "Black Coffee", category: "Coffee", price: 90, isVeg: true },
  { id: 2, name: "Americano", category: "Coffee", price: 100, isVeg: true },
  { id: 3, name: "Café Latte", category: "Coffee", price: 140, isVeg: true },
  { id: 4, name: "Piccolo Latte", category: "Coffee", price: 100, isVeg: true },
  { id: 5, name: "Cappuccino", category: "Coffee", price: 140, isVeg: true },
  { id: 6, name: "Mocha / Mocha Madness", category: "Coffee", price: 200, isVeg: true },
  { id: 7, name: "Caramel Macchiato", category: "Coffee", price: 200, isVeg: true },
  { id: 8, name: "Matcha Latte (Hot)", category: "Coffee", price: 250, isVeg: true },

  // Iced Coffee
  { id: 9, name: "Iced Americano", category: "Iced Coffee", price: 120, isVeg: true },
  { id: 10, name: "Iced Café Latte", category: "Iced Coffee", price: 150, isVeg: true },
  { id: 11, name: "Iced Cappuccino", category: "Iced Coffee", price: 160, isVeg: true },
  { id: 12, name: "Iced Caramel Macchiato", category: "Iced Coffee", price: 220, isVeg: true },
  { id: 13, name: "Iced Mocha Madness", category: "Iced Coffee", price: 220, isVeg: true },

  // Momo
  { id: 14, name: "Steam Momo (Veg)", category: "Momo", price: 160, isVeg: true },
  { id: 15, name: "Steam Momo (Chicken)", category: "Momo", price: 200, isVeg: false },
  { id: 16, name: "Kothey Momo (Veg)", category: "Momo", price: 230, isVeg: true },
  { id: 17, name: "Kothey Momo (Chicken)", category: "Momo", price: 260, isVeg: false },
  { id: 18, name: "Jhol Momo (Veg)", category: "Momo", price: 220, isVeg: true },
  { id: 19, name: "Jhol Momo (Chicken)", category: "Momo", price: 250, isVeg: false },
  { id: 20, name: "Chilly Momo (Veg)", category: "Momo", price: 230, isVeg: true },
  { id: 21, name: "Chilly Momo (Chicken)", category: "Momo", price: 280, isVeg: false },

  // Veg Appetizer
  { id: 22, name: "Bhatmas Sadeko", category: "Veg Appetizer", price: 120, isVeg: true },
  { id: 23, name: "Wai Wai Sadeko", category: "Veg Appetizer", price: 100, isVeg: true },
  { id: 24, name: "Peanut Sadeko", category: "Veg Appetizer", price: 130, isVeg: true },
  { id: 25, name: "Chatpate (Nepali Style)", category: "Veg Appetizer", price: 150, isVeg: true },
  { id: 26, name: "French Fries (Salted)", category: "Veg Appetizer", price: 190, isVeg: true },
  { id: 27, name: "Paneer Chilly", category: "Veg Appetizer", price: 350, isVeg: true },
  { id: 28, name: "Mushroom Chilly", category: "Veg Appetizer", price: 320, isVeg: true },
  { id: 29, name: "Paneer Pakoda", category: "Veg Appetizer", price: 290, isVeg: true },

  // Non-Veg Appetizer
  { id: 30, name: "Chicken Chatpate", category: "Non-Veg Appetizer", price: 250, isVeg: false },
  { id: 31, name: "Chicken Lollipop", category: "Non-Veg Appetizer", price: 400, isVeg: false },
  { id: 32, name: "Chicken Sadeko", category: "Non-Veg Appetizer", price: 390, isVeg: false },
  { id: 33, name: "Chicken Chilly", category: "Non-Veg Appetizer", price: 330, isVeg: false },
  { id: 34, name: "Chicken Choila", category: "Non-Veg Appetizer", price: 390, isVeg: false },
  { id: 35, name: "Chicken Taas", category: "Non-Veg Appetizer", price: 380, isVeg: false },
  { id: 36, name: "Mutton Taas", category: "Non-Veg Appetizer", price: 480, isVeg: false },
  { id: 37, name: "Fish Fry", category: "Non-Veg Appetizer", price: 380, isVeg: false },

  // Main Course
  { id: 38, name: "Paneer Butter Masala", category: "Main Course", price: 340, isVeg: true },
  { id: 39, name: "Matar Paneer", category: "Main Course", price: 320, isVeg: true },
  { id: 40, name: "Chicken Curry", category: "Main Course", price: 380, isVeg: false },
  { id: 41, name: "Mutton Rogan Josh", category: "Main Course", price: 410, isVeg: false },
  { id: 42, name: "Biryani (Veg)", category: "Main Course", price: 310, isVeg: true },
  { id: 43, name: "Biryani (Chicken)", category: "Main Course", price: 390, isVeg: false },

  // Burger & Sandwich
  { id: 44, name: "Veg Burger", category: "Burger & Sandwich", price: 290, isVeg: true },
  { id: 45, name: "Chicken Burger", category: "Burger & Sandwich", price: 350, isVeg: false },
  { id: 46, name: "Veg Sandwich", category: "Burger & Sandwich", price: 250, isVeg: true },
  { id: 47, name: "Chicken Sandwich", category: "Burger & Sandwich", price: 350, isVeg: false },

  // Rice & Noodles
  { id: 48, name: "Fried Rice (Veg)", category: "Rice & Noodles", price: 180, isVeg: true },
  { id: 49, name: "Fried Rice (Chicken)", category: "Rice & Noodles", price: 250, isVeg: false },
  { id: 50, name: "Noodles (Veg)", category: "Rice & Noodles", price: 180, isVeg: true },
  { id: 51, name: "Noodles (Chicken)", category: "Rice & Noodles", price: 250, isVeg: false },
  { id: 52, name: "Thukpa (Veg)", category: "Rice & Noodles", price: 210, isVeg: true },
  { id: 53, name: "Thukpa (Chicken)", category: "Rice & Noodles", price: 280, isVeg: false },

  // Mocktails
  { id: 54, name: "Virgin Mojito", category: "Mocktails", price: 290, isVeg: true },
  { id: 55, name: "Orange Purple (Special)", category: "Mocktails", price: 310, isVeg: true },
  { id: 56, name: "Green Sea (Special)", category: "Mocktails", price: 320, isVeg: true },
  { id: 57, name: "Strawberry Purple", category: "Mocktails", price: 325, isVeg: true },
  { id: 58, name: "Sunrise", category: "Mocktails", price: 310, isVeg: true },
  { id: 59, name: "Red Raider", category: "Mocktails", price: 320, isVeg: true },

  // Shakes & Frappe
  { id: 60, name: "KitKat Milkshake", category: "Shakes & Frappe", price: 250, isVeg: true },
  { id: 61, name: "Strawberry Milkshake", category: "Shakes & Frappe", price: 220, isVeg: true },
  { id: 62, name: "Coffee Frappe", category: "Shakes & Frappe", price: 250, isVeg: true },
  { id: 63, name: "Vanilla Frappe", category: "Shakes & Frappe", price: 260, isVeg: true },
  { id: 64, name: "Mocha Frappe", category: "Shakes & Frappe", price: 260, isVeg: true },
  { id: 65, name: "Choco-Oreo Frappe", category: "Shakes & Frappe", price: 280, isVeg: true }
];

export const categories = [
  "All",
  "Coffee",
  "Iced Coffee", 
  "Momo",
  "Veg Appetizer",
  "Non-Veg Appetizer",
  "Main Course",
  "Burger & Sandwich",
  "Rice & Noodles",
  "Mocktails",
  "Shakes & Frappe"
];