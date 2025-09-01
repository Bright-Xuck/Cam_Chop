export const merchants = [
  {
    merchantId: "m1",
    name: "Xuck's Grill House",
    location: "123 Main Street, Buea",
    email: "john.mckinley@examplepetstore.com",
    tel: "+237 670 123 456",


    description: "Authentic African grill house serving suya, roasted fish, and traditional dishes.",

    logo: "/images/xucks-logo.png",
    banner: "/images/xucks-banner.jpg",
    rating: 4.7,
    reviews: [
      {
        user: "Mary T.",
        comment: "Best roasted fish in town!",
        rating: 5,
        date: "2025-08-30"
      },
      {
        user: "James N.",
        comment: "Fast delivery and tasty food.",
        rating: 4,
        date: "2025-08-25"
      }
    ],

    services: {
      delivery: true,
      pickup: true,
      dineIn: false
    },

    hours: {
      monday: { open: "08:00", close: "22:00" },
      tuesday: { open: "08:00", close: "22:00" },
      wednesday: { open: "08:00", close: "22:00" },
      thursday: { open: "08:00", close: "22:00" },
      friday: { open: "08:00", close: "00:00" },
      saturday: { open: "09:00", close: "00:00" },
      sunday: { open: "09:00", close: "20:00" }
    },

    categories: ["Grill", "African", "Seafood"],


  },
  {
    merchantId: "m2",
    name: "Mama Sarah’s Kitchen",
    location: "456 Market Road, Limbe",
    email: "johndoe@gmail.com",
    tel: "+237 671 987 654",

    description: "Home-style Cameroonian dishes with fresh local ingredients.",

    logo: "/images/mama-sarah-logo.png",
    banner: "/images/mama-sarah-banner.jpg",

    rating: 4.5,
    reviews: [
      {
        user: "Kelvin A.",
        comment: "Loved the eru and fufu combo!",
        rating: 5,
        date: "2025-08-28"
      },
      {
        user: "Sandra B.",
        comment: "Good portion sizes and very affordable.",
        rating: 4,
        date: "2025-08-20"
      }
    ],

    services: {
      delivery: true,
      pickup: true,
      dineIn: true
    },

    hours: {
      monday: { open: "07:00", close: "21:00" },
      tuesday: { open: "07:00", close: "21:00" },
      wednesday: { open: "07:00", close: "21:00" },
      thursday: { open: "07:00", close: "21:00" },
      friday: { open: "07:00", close: "23:00" },
      saturday: { open: "08:00", close: "23:00" },
      sunday: { open: "08:00", close: "20:00" }
    },

    categories: ["Cameroonian", "Traditional", "Affordable"],


  }
];
