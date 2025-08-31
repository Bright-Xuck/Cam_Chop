// src/data/products.js
export const products = [
  {
    id: 1,
    menuid: 1,
    merchantId: "m1",
    name: "Burger & Fries",
    price: 5.99,
    shortDesc: "Juicy grilled chicken with lettuce & mayo",
    image: "photos/productimg/download.jpg",
    category: "Burgers",
    merchantId: 1,
    details: {
      description: "Made with 100% fresh chicken breast, served with fries.",
      ingredients: ["Chicken breast", "Lettuce", "Mayo", "Buns"],
      reviews: [
        { user: "John", rating: 5, comment: "So tasty!" },
        { user: "Mary", rating: 4, comment: "Could use more sauce." }
      ]
    }
  },
  {
    id: 2,
    menuid: 1,
     merchantId: "m1",
    name: "Bread & Jam",
    price: 7.99,
    shortDesc: "Traditional Nigerian/Cameroonian soup",
    image: "photos/productimg/images.jpg",
    category: "African Dishes",
    merchantId: 2,
    details: {
      description: "Richly prepared with egusi seeds, spinach & beef.",
      ingredients: ["Egusi", "Spinach", "Beef", "Palm oil"],
      reviews: []
    }
  },
  {
    id: 3,
    menuid: 1,
     merchantId: "m1",
    name: "Pizza",
    price: 6.5,
    shortDesc: "Grilled spicy skewered beef",
    image: "photos/productimg/pizza.jpeg",
    category: "African Dishes",
    merchantId: 2,
    details: {
      description: "Street-style suya with onions and pepper mix.",
      ingredients: ["Beef", "Suya spice", "Onion", "Pepper"],
      reviews: [{ user: "Daniel", rating: 5, comment: "Authentic taste!" }]
    }
  },
  {
    id: 4,
    menuid: 1,
     merchantId: "m1",
    name: "Margherita Pizza",
    price: 10.99,
    shortDesc: "Classic cheese & tomato pizza",
    image: "photos/productimg/chickenburger.jpg",
    category: "Pizza",
    merchantId: 3,
    details: {
      description: "Simple but delicious Margherita with mozzarella & basil.",
      ingredients: ["Tomato", "Mozzarella", "Basil", "Dough"],
      reviews: []
    }
  },
  {
    id: 5,
    menuid: 1,
     merchantId: "m1",
    name: "Beef Shawarma",
    price: 8.99,
    shortDesc: "Middle Eastern style beef wrap",
    image: "photos/productimg/chickenmargarita.jpg",
    category: "Wraps",
    merchantId: 1,
    details: {
      description: "Loaded beef shawarma with garlic sauce and veggies.",
      ingredients: ["Beef", "Pita bread", "Garlic sauce", "Veggies"],
      reviews: []
    }
  },
  {
    id: 6,
    menuid: 1,
     merchantId: "m1",
    name: "Vegetable Fried Rice",
    price: 6.99,
    shortDesc: "Stir-fried rice with veggies",
    image: "photos/productimg/chickinbuck.jpg",
    category: "Rice Dishes",
    merchantId: 2,
    details: {
      description: "Nigerian-style fried rice with mixed vegetables.",
      ingredients: ["Rice", "Carrot", "Green beans", "Sweet corn"],
      reviews: []
    }
  },
  {
    id: 7,
    menuid: 1,
     merchantId: "m1",
    name: "Pounded Yam & Egusi",
    price: 9.5,
    shortDesc: "Staple swallow with soup",
    image: "photos/productimg/crunchiespack.jpg",
    category: "African Dishes",
    merchantId: 2,
    details: {
      description: "Smooth pounded yam served with rich egusi soup.",
      ingredients: ["Yam flour", "Egusi", "Vegetables", "Beef"],
      reviews: []
    }
  },
  {
    id: 8,
    menuid: 1,
     merchantId: "m1",
    name: "Grilled Fish",
    price: 12.0,
    shortDesc: "Charcoal-grilled whole fish",
    image: "photos/productimg/familysburger.jpg",
    category: "Seafood",
    merchantId: 3,
    details: {
      description: "Tilapia grilled with spices, served with plantain.",
      ingredients: ["Tilapia", "Spices", "Plantain"],
      reviews: [{ user: "Anna", rating: 4, comment: "Delicious but a bit salty." }]
    }
  },
  {
    id: 9,
    menuid: 1,
     merchantId: "m1",
    name: "Spaghetti Bolognese",
    price: 11.5,
    shortDesc: "Italian pasta with beef sauce",
    image: "photos/productimg/fancyburrito.jpg",
    category: "Pasta",
    merchantId: 3,
    details: {
      description: "Rich tomato and beef sauce on al dente spaghetti.",
      ingredients: ["Spaghetti", "Tomato", "Beef", "Garlic"],
      reviews: []
    }
  },
  {
    id: 10,
    menuid: 2,
     merchantId: "m2",
    name: "Jollof Rice",
    price: 7.99,
    shortDesc: "West African jollof rice",
    image: "photos/productimg/infusedbread.jpg",
    category: "Rice Dishes",
    merchantId: 2,
    details: {
      description: "Classic party jollof cooked with tomato & spices.",
      ingredients: ["Rice", "Tomato", "Onion", "Pepper"],
      reviews: [{ user: "Sam", rating: 5, comment: "Best jollof ever!" }]
    }
  },
  {
    id: 11,
    menuid: 2,
     merchantId: "m2",
    name: "Cheeseburger",
    price: 6.99,
    shortDesc: "Beef patty with cheese slice",
    image: "photos/productimg/lassagna.jpg",
    category: "Burgers",
    merchantId: 1,
    details: {
      description: "Juicy beef burger topped with cheddar cheese.",
      ingredients: ["Beef patty", "Cheese", "Buns", "Lettuce"],
      reviews: []
    }
  },
  {
    id: 12,
    menuid: 2,
     merchantId: "m2",
    name: "Pepper Soup",
    price: 6.5,
    shortDesc: "Spicy light soup",
    image: "photos/productimg/saladbread.jpg",
    category: "Soups",
    merchantId: 2,
    details: {
      description: "Spicy pepper soup with goat meat.",
      ingredients: ["Goat meat", "Pepper", "Spices"],
      reviews: []
    }
  },
  {
    id: 13,
    menuid: 2,
     merchantId: "m2",
    name: "French Fries",
    price: 3.5,
    shortDesc: "Crispy golden fries",
    image: "photos/productimg/sushi.jpg",
    category: "Sides",
    merchantId: 1,
    details: {
      description: "Thin-cut fried potatoes with ketchup.",
      ingredients: ["Potatoes", "Salt", "Oil"],
      reviews: []
    }
  },
//   {
//     id: 14,
//     name: "Chocolate Cake",
//     price: 4.99,
//     shortDesc: "Rich chocolate dessert",
//     image: "../photos/productimg/chocolate_cake.jpg",
//     category: "Desserts",
//     merchantId: 3,
//     details: {
//       description: "Moist chocolate sponge with ganache topping.",
//       ingredients: ["Flour", "Cocoa", "Sugar", "Eggs"],
//       reviews: []
//     }
//   },
//   {
//     id: 15,
//     name: "Chapati & Beans",
//     price: 5.5,
//     shortDesc: "East African combo meal",
//     image: "../photos/productimg/chapati_beans.jpg",
//     category: "African Dishes",
//     merchantId: 2,
//     details: {
//       description: "Soft chapati served with spiced beans.",
//       ingredients: ["Chapati", "Beans", "Onion", "Tomato"],
//       reviews: []
//     }
//   },
//   {
//     id: 16,
//     name: "Fruit Salad",
//     price: 4.0,
//     shortDesc: "Mixed fresh fruits",
//     image: "../photos/productimg/fruit_salad.jpg",
//     category: "Desserts",
//     merchantId: 3,
//     details: {
//       description: "Refreshing mix of seasonal fruits.",
//       ingredients: ["Pineapple", "Apple", "Banana", "Watermelon"],
//       reviews: []
//     }
//   },
//   {
//     id: 17,
//     name: "Chicken Wings",
//     price: 7.5,
//     shortDesc: "Crispy fried wings",
//     image: "../photos/productimg/wings.jpg",
//     category: "Snacks",
//     merchantId: 1,
//     details: {
//       description: "Deep fried chicken wings with hot sauce.",
//       ingredients: ["Chicken wings", "Flour", "Spices"],
//       reviews: []
//     }
//   },
//   {
//     id: 18,
//     name: "Okra Soup",
//     price: 6.99,
//     shortDesc: "Slimy but tasty Nigerian soup",
//     image: "../photos/productimg/okra.jpg",
//     category: "African Dishes",
//     merchantId: 2,
//     details: {
//       description: "Cooked with okra, fish, and assorted meat.",
//       ingredients: ["Okra", "Fish", "Meat", "Palm oil"],
//       reviews: []
//     }
//   },
//   {
//     id: 19,
//     name: "Fufu & Eru",
//     price: 8.5,
//     shortDesc: "Cameroonian delicacy",
//     image: "../photos/productimg/eru.jpg",
//     category: "African Dishes",
//     merchantId: 2,
//     details: {
//       description: "Cassava fufu served with eru leaves and meat.",
//       ingredients: ["Cassava", "Eru leaves", "Palm oil", "Fish"],
//       reviews: []
//     }
//   },
//   {
//     id: 20,
//     name: "Milkshake",
//     price: 4.5,
//     shortDesc: "Cold creamy drink",
//     image: "../photos/productimg/milkshake.jpg",
//     category: "Drinks",
//     merchantId: 3,
//     details: {
//       description: "Vanilla milkshake topped with whipped cream.",
//       ingredients: ["Milk", "Vanilla", "Ice cream"],
//       reviews: []
//     }
//   }
];
