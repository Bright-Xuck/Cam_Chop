// Live orders for merchant portal - simulating real-time incoming orders
export const merchantOrders = [
  {
    id: "ORD-101",
    orderNumber: "#1047",
    customer: {
      name: "John Doe",
      phone: "+237 670 123 456",
      address: "123 Independence Ave, Buea"
    },
    items: [
      { id: "1", name: "Burger & Fries", quantity: 2, price: 5990, notes: "Extra cheese" },
      { id: "4", name: "Margherita Pizza", quantity: 1, price: 10990, notes: "" }
    ],
    subtotal: 22970,
    deliveryFee: 1500,
    total: 24470,
    status: "new",
    paymentMethod: "Mobile Money",
    paymentStatus: "paid",
    createdAt: "2026-04-13T14:30:00Z",
    estimatedPrepTime: 25,
    specialInstructions: "Please ring doorbell twice"
  },
  {
    id: "ORD-102",
    orderNumber: "#1048",
    customer: {
      name: "Mary Johnson",
      phone: "+237 671 987 654",
      address: "45 College Road, Limbe"
    },
    items: [
      { id: "10", name: "Jollof Rice", quantity: 3, price: 7990, notes: "Extra spicy" },
      { id: "12", name: "Pepper Soup", quantity: 2, price: 6500, notes: "" }
    ],
    subtotal: 36970,
    deliveryFee: 1000,
    total: 37970,
    status: "preparing",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "pending",
    createdAt: "2026-04-13T14:15:00Z",
    estimatedPrepTime: 20,
    specialInstructions: ""
  },
  {
    id: "ORD-103",
    orderNumber: "#1049",
    customer: {
      name: "Peter Smith",
      phone: "+237 672 456 789",
      address: "78 Market Street, Douala"
    },
    items: [
      { id: "8", name: "Grilled Fish", quantity: 1, price: 12000, notes: "Well done" },
      { id: "6", name: "Vegetable Fried Rice", quantity: 2, price: 6990, notes: "" }
    ],
    subtotal: 25980,
    deliveryFee: 1500,
    total: 27480,
    status: "ready",
    paymentMethod: "Card",
    paymentStatus: "paid",
    createdAt: "2026-04-13T13:45:00Z",
    estimatedPrepTime: 30,
    specialInstructions: "Extra napkins please"
  },
  {
    id: "ORD-104",
    orderNumber: "#1050",
    customer: {
      name: "Sandra Wilson",
      phone: "+237 673 321 654",
      address: "22 Unity Road, Buea"
    },
    items: [
      { id: "5", name: "Beef Shawarma", quantity: 4, price: 8990, notes: "" }
    ],
    subtotal: 35960,
    deliveryFee: 1500,
    total: 37460,
    status: "new",
    paymentMethod: "Mobile Money",
    paymentStatus: "paid",
    createdAt: "2026-04-13T14:32:00Z",
    estimatedPrepTime: 15,
    specialInstructions: ""
  },
  {
    id: "ORD-105",
    orderNumber: "#1051",
    customer: {
      name: "Michael Brown",
      phone: "+237 674 654 987",
      address: "56 Palm Street, Limbe"
    },
    items: [
      { id: "11", name: "Cheeseburger", quantity: 2, price: 6990, notes: "No onions" },
      { id: "9", name: "Spaghetti Bolognese", quantity: 1, price: 11500, notes: "" }
    ],
    subtotal: 25480,
    deliveryFee: 1000,
    total: 26480,
    status: "completed",
    paymentMethod: "Cash on Delivery",
    paymentStatus: "paid",
    createdAt: "2026-04-13T12:30:00Z",
    completedAt: "2026-04-13T13:15:00Z",
    estimatedPrepTime: 25,
    specialInstructions: ""
  }
];

export const orderStatusConfig = {
  new: { 
    label: "New Order", 
    bgColor: "bg-blue-100", 
    textColor: "text-blue-800",
    borderColor: "border-blue-300",
    icon: "bell"
  },
  preparing: { 
    label: "Preparing", 
    bgColor: "bg-warning/20", 
    textColor: "text-warning",
    borderColor: "border-warning/50",
    icon: "chef"
  },
  ready: { 
    label: "Ready for Pickup", 
    bgColor: "bg-success/20", 
    textColor: "text-success",
    borderColor: "border-success/50",
    icon: "package"
  },
  completed: { 
    label: "Completed", 
    bgColor: "bg-secondary", 
    textColor: "text-muted-foreground",
    borderColor: "border-border",
    icon: "check"
  }
};

// Analytics mock data
export const merchantAnalytics = {
  today: {
    revenue: 245890,
    orders: 28,
    avgOrderValue: 8782,
    completionRate: 96
  },
  week: {
    revenue: 1456780,
    orders: 182,
    avgOrderValue: 8004,
    completionRate: 94
  },
  month: {
    revenue: 5890450,
    orders: 724,
    avgOrderValue: 8136,
    completionRate: 95
  },
  revenueByDay: [
    { day: "Mon", revenue: 189500 },
    { day: "Tue", revenue: 215000 },
    { day: "Wed", revenue: 178900 },
    { day: "Thu", revenue: 245890 },
    { day: "Fri", revenue: 312000 },
    { day: "Sat", revenue: 289000 },
    { day: "Sun", revenue: 226490 }
  ],
  ordersByDay: [
    { day: "Mon", orders: 24 },
    { day: "Tue", orders: 28 },
    { day: "Wed", orders: 22 },
    { day: "Thu", orders: 28 },
    { day: "Fri", orders: 35 },
    { day: "Sat", orders: 32 },
    { day: "Sun", orders: 27 }
  ],
  topSellingItems: [
    { name: "Burger & Fries", quantity: 145, revenue: 868550 },
    { name: "Jollof Rice", quantity: 128, revenue: 1022720 },
    { name: "Grilled Fish", quantity: 98, revenue: 1176000 },
    { name: "Beef Shawarma", quantity: 87, revenue: 782130 },
    { name: "Pepper Soup", quantity: 76, revenue: 494000 }
  ],
  recentReviews: [
    { customer: "Mary T.", rating: 5, comment: "Best roasted fish in town!", date: "2026-04-12" },
    { customer: "James N.", rating: 4, comment: "Fast delivery and tasty food.", date: "2026-04-11" },
    { customer: "Kelvin A.", rating: 5, comment: "Loved the eru and fufu combo!", date: "2026-04-10" }
  ]
};

// Menu categories for catalog manager
export const menuCategories = [
  { id: "cat-1", name: "Main Course", description: "Our signature main dishes", itemCount: 12 },
  { id: "cat-2", name: "Appetizers", description: "Start your meal right", itemCount: 8 },
  { id: "cat-3", name: "Drinks", description: "Refreshing beverages", itemCount: 15 },
  { id: "cat-4", name: "Desserts", description: "Sweet endings", itemCount: 6 },
  { id: "cat-5", name: "Sides", description: "Perfect accompaniments", itemCount: 10 }
];
