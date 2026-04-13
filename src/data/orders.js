export const mockOrders = [
  {
    id: "ORD-001",
    userId: "johnfish@gmail.com",
    merchantId: "m1",
    merchantName: "Xuck's Grill House",
    items: [
      { id: "1", name: "Burger & Fries", quantity: 2, price: 5990 },
      { id: "4", name: "Margherita Pizza", quantity: 1, price: 10990 }
    ],
    subtotal: 22970,
    deliveryFee: 1500,
    total: 24470,
    status: "delivered",
    deliveryAddress: "123 Independence Ave, Buea",
    paymentMethod: "Mobile Money",
    createdAt: "2026-04-10T14:30:00Z",
    deliveredAt: "2026-04-10T15:15:00Z",
    estimatedDelivery: "30-45 mins"
  },
  {
    id: "ORD-002",
    userId: "johnfish@gmail.com",
    merchantId: "m2",
    merchantName: "Mama Sarah's Kitchen",
    items: [
      { id: "10", name: "Jollof Rice", quantity: 3, price: 7990 },
      { id: "12", name: "Pepper Soup", quantity: 2, price: 6500 }
    ],
    subtotal: 36970,
    deliveryFee: 1000,
    total: 37970,
    status: "in-progress",
    deliveryAddress: "45 College Road, Limbe",
    paymentMethod: "Cash on Delivery",
    createdAt: "2026-04-13T12:00:00Z",
    estimatedDelivery: "25-35 mins"
  },
  {
    id: "ORD-003",
    userId: "johnfish@gmail.com",
    merchantId: "m1",
    merchantName: "Xuck's Grill House",
    items: [
      { id: "8", name: "Grilled Fish", quantity: 1, price: 12000 },
      { id: "6", name: "Vegetable Fried Rice", quantity: 2, price: 6990 }
    ],
    subtotal: 25980,
    deliveryFee: 1500,
    total: 27480,
    status: "delivered",
    deliveryAddress: "123 Independence Ave, Buea",
    paymentMethod: "Card",
    createdAt: "2026-04-05T18:45:00Z",
    deliveredAt: "2026-04-05T19:30:00Z",
    estimatedDelivery: "35-50 mins"
  },
  {
    id: "ORD-004",
    userId: "markbright@gmail.com",
    merchantId: "m2",
    merchantName: "Mama Sarah's Kitchen",
    items: [
      { id: "11", name: "Cheeseburger", quantity: 4, price: 6990 }
    ],
    subtotal: 27960,
    deliveryFee: 1000,
    total: 28960,
    status: "cancelled",
    deliveryAddress: "78 Market Street, Douala",
    paymentMethod: "Mobile Money",
    createdAt: "2026-04-08T20:00:00Z",
    cancelledAt: "2026-04-08T20:15:00Z",
    cancelReason: "Restaurant closed"
  },
  {
    id: "ORD-005",
    userId: "johnfish@gmail.com",
    merchantId: "m1",
    merchantName: "Xuck's Grill House",
    items: [
      { id: "5", name: "Beef Shawarma", quantity: 2, price: 8990 },
      { id: "9", name: "Spaghetti Bolognese", quantity: 1, price: 11500 }
    ],
    subtotal: 29480,
    deliveryFee: 1500,
    total: 30980,
    status: "pending",
    deliveryAddress: "123 Independence Ave, Buea",
    paymentMethod: "Mobile Money",
    createdAt: "2026-04-13T13:30:00Z",
    estimatedDelivery: "40-55 mins"
  }
];

export const orderStatuses = {
  pending: { label: "Pending", color: "bg-warning", textColor: "text-warning" },
  "in-progress": { label: "In Progress", color: "bg-primary", textColor: "text-primary" },
  delivered: { label: "Delivered", color: "bg-success", textColor: "text-success" },
  cancelled: { label: "Cancelled", color: "bg-error", textColor: "text-error" }
};
