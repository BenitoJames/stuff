// Establishments Data for AgnoRated
// Data structure follows camelCase naming convention

/* id: 100_,
    name: "",
    description: "",
    cuisineType: "",
    priceRange: "",
    location: "",
    mapUrl: "",
    rating: ,
    totalReviews: ,
    tags: ["", "", "", ""],
    imageUrl: "",
    gallery: [
      "",
      ",
      "" ],
    ownerId: 200_ 
*/

const establishments = [
  {
    id: 1001,
    name: "Ate Rica's Bacsilog",
    description: "Ate Rica's Bacsilog On-The-Go a Filipino food stall favorite serving the ultimate comfort trio—garlic rice, fried egg, and savory meats. Their signature bacsilog, crispy bacon with rice and egg, is an affordable go-to that keeps students coming back.",
    cuisineType: "Filipino",
    priceRange: "₱",
    location: "Agno Food Court, 2305 Fidel A. Reyes, Malate",
    mapUrl: "https://maps.app.goo.gl/epPGJCtaWrovTZUt8",
    rating: 4.5,
    totalReviews: 3,
    tags: ["Affordable", "Fast Service", "Silog Meals", "Comfort Foods"],
    imageUrl: "../assets/img/aterica-main.jpg",
    gallery: [
      "../assets/img/ate-rica-1.jpg",
      "../assets/img/ate-rica-2.jpg",
      "../assets/img/ate-rica-3.jpg"
    ],
    ownerId: 2001
  },
  {
    id: 1002,
    name: "The Barn",
    description: "The Barn by Borro brings big flavors in a cozy setting—serving Filipino comfort classics and Western favorites like fried chicken, steak, and pasta. With hearty portions and a warm vibe, it's a go-to hangout for students and foodies alike.",
    cuisineType: "Filipino-Western",
    priceRange: "₱₱",
    location: "Fidel A. Reyes, Malate",
    mapUrl: "https://maps.app.goo.gl/zr4wZZEKaAbpCVty5",
    rating: 4.3,
    totalReviews: 2,
    tags: ["Casual Dining", "Filipino Fusion", "Hangout Spots", "Generous Portions"],
    imageUrl: "../assets/img/thebarn-main.jpg",
    gallery: [
      "../assets/img/the-barn-1.jpg",
      "../assets/img/the-barn-2.jpg",
      "../assets/img/the-barn-3.jpg"
    ],
    ownerId: 2002
  },
  {
    id: 1003,
    name: "AMS Golden Plate Restaurant",
    description: "AMS Golden Plate Restaurant is a go-to for Filipino comfort food, serving silog meals, sisig, and hearty classics at student-friendly prices. With generous portions and a casual vibe, it's a staple dining spot near Taft.",
    cuisineType: "Filipino-Asian",
    priceRange: "₱-₱₱",
    location: "2F 207, Sherwood Place, 2264 Taft Ave, Malate",
    mapUrl: "https://maps.app.goo.gl/UsLV1Mk7wFmDSh9D7",
    rating: 0.0,
    totalReviews: 0,
    tags: ["Affordable", "Staple Dining", "Student Friendly", "Comfort Foods"],
    imageUrl: "../assets/img/ams-main.jpg",
    gallery: [
      "../assets/img/golden-plate-1.jpg",
      "../assets/img/golden-plate-2.jpg",
      "../assets/img/golden-plate-3.jpg"
    ],
    ownerId: 2003
  },
  {
    id: 1004,
    name: "24 Chicken",
    description: "24 Chicken serves up Korean-style boneless fried chicken in bold flavors like Yangnyeom and Snow Cheese. With budget-friendly bundles and rice meals, it's a go-to comfort food spot for students and late-night cravings.",
    cuisineType: "Korean",
    priceRange: "₱",
    location: "EGI TAFT TOWER, 2339 Taft Ave, Malate",
    mapUrl: "https://maps.app.goo.gl/UfnxRKjNSWbTrP4L6",
    rating: 4.4,
    totalReviews: 2,
    tags: ["Fried Chicken", "Affordable", "Student Friendly", "Long Lines"],
    imageUrl: "../assets/img/24chicken-main.jpg",
    gallery: [
      "../assets/img/24-chicken-1.jpg",
      "../assets/img/24-chicken-2.jpg",
      "../assets/img/24-chicken-3.jpg"
    ],
    ownerId: 2004
  },
  {
    id: 1005,
    name: "El Poco Cantina",
    description: "El Poco Cantina brings the bold flavors of Mexico to Malate, serving birria tacos, burritos, and nachos in a vibrant, graffiti-filled space. Affordable and flavorful, it's a go-to spot for students and late-night foodies.",
    cuisineType: "Mexican",
    priceRange: "₱₱-₱₱₱",
    location: "945 Estrada St, Malate",
    mapUrl: "https://maps.app.goo.gl/kdYd4nyNW2xcThBcA",
    rating: 4.7,
    totalReviews: 2,
    tags: ["Michelin Selected", "Street Foods", "Casual Dining", "Long Lines"],
    imageUrl: "../assets/img/elpoco-main.png",
    gallery: [
      "../assets/img/el-poco-1.jpg",
      "../assets/img/el-poco-2.jpg",
      "../assets/img/el-poco-3.jpg"
    ],
    ownerId: 2005
  },
  {
    id: 1006,
    name: "Obscure Café",
    description: "Obscure Café is a student-favorite hangout serving creative lattes and light bites in a cozy, modern space. With affordable drinks and a welcoming vibe, it's a go-to spot for coffee lovers around Malate and Morayta.",
    cuisineType: "Café",
    priceRange: "₱-₱₱",
    location: "One Archers Place, 2311 Taft Ave, Malate",
    mapUrl: "https://maps.app.goo.gl/NRpDzPxYu1ydzamS6",
    rating: 4.0,
    totalReviews: 1,
    tags: ["Study Spots", "Cozy Atmosphere", "Coffee", "Hangout Spots"],
    imageUrl: "../assets/img/obscure-main.jpeg",
    gallery: [
      "../assets/img/obscure-cafe-1.jpg",
      "../assets/img/obscure-cafe-2.jpg",
      "../assets/img/obscure-cafe-3.jpg"
    ],
    ownerId: 2006
  }
]; 

const reviews = [
  // ========================================
  // Ate Rica's Bacsilog (ID: 1001) - 5 reviews
  // ========================================
  {
    id: 3001,
    establishmentId: 1001,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Best bacsilog near campus!",
    content: "The bacon is perfectly crispy and the garlic rice is so flavorful! Ate Rica never disappoints. The portion size is generous for the price. I come here at least twice a week. Highly recommend the bacsilog combo - you won't regret it!",
    helpful: 24,
    unhelpful: 2,
    createdAt: "2026-02-10T10:30:00Z"
  },
  {
    id: 3002,
    establishmentId: 1001,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Solid comfort food option",
    content: "Great value for money. The serving is quite big and the taste is consistent every time I visit. Sometimes there's a bit of a wait during lunch rush but it's worth it. The longsilog is also really good!",
    helpful: 15,
    unhelpful: 1,
    createdAt: "2026-02-08T14:20:00Z"
  },
  {
    id: 3003,
    establishmentId: 1001,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Perfect for students on a budget",
    content: "This is my go-to spot when I need a filling meal without breaking the bank. The staff is friendly and service is quick even during peak hours. Definitely recommend to fellow students!",
    helpful: 18,
    unhelpful: 0,
    createdAt: "2026-02-05T09:15:00Z"
  },
  {
    id: 3004,
    establishmentId: 1001,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Authentic Filipino breakfast done right",
    content: "Ate Rica's reminds me of home cooking. The garlic rice has the perfect amount of toasted garlic bits, and the sunny side up eggs are always cooked just right. The tocino is sweet and tender. Been coming here since freshman year!",
    helpful: 21,
    unhelpful: 1,
    createdAt: "2026-02-01T08:45:00Z"
  },
  {
    id: 3005,
    establishmentId: 1001,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Great for quick meals between classes",
    content: "The service is fast which is perfect when you're rushing between classes. Portions are generous and the prices won't hurt your wallet. My only complaint is sometimes the bacon can be a bit too salty, but overall it's a solid choice.",
    helpful: 12,
    unhelpful: 3,
    createdAt: "2026-01-28T12:00:00Z"
  },

  // ========================================
  // The Barn (ID: 1002) - 5 reviews
  // ========================================
  {
    id: 3006,
    establishmentId: 1002,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Amazing ambiance and food!",
    content: "The Barn is perfect for hanging out with friends. Their fried chicken is crispy on the outside and juicy inside. The pasta is creamy and flavorful. A bit pricier than other options but worth it for the quality and atmosphere. Great for dates or group study sessions!",
    helpful: 31,
    unhelpful: 3,
    createdAt: "2026-02-12T16:45:00Z"
  },
  {
    id: 3007,
    establishmentId: 1002,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Great food, generous portions",
    content: "Really enjoyed the steak here. Cooked perfectly medium rare as requested. The portions are huge - I couldn't finish mine! Service was a bit slow but the staff was very accommodating. Will definitely come back.",
    helpful: 12,
    unhelpful: 1,
    createdAt: "2026-02-09T12:30:00Z"
  },
  {
    id: 3008,
    establishmentId: 1002,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Best wings near campus!",
    content: "Their buffalo wings are incredible! The sauce has the perfect balance of spicy and tangy. The blue cheese dip complements it perfectly. Prices are reasonable for the quality. The rustic barn interior is really cool too. Highly recommend for group dinners!",
    helpful: 28,
    unhelpful: 2,
    createdAt: "2026-02-06T19:15:00Z"
  },
  {
    id: 3009,
    establishmentId: 1002,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Good vibes, good food",
    content: "The Barn has this cozy, homey atmosphere that makes you want to stay longer. Their burgers are juicy and loaded with toppings. The fries are crispy and well-seasoned. A bit on the pricey side but you get what you pay for. Perfect spot for celebrating after exams!",
    helpful: 19,
    unhelpful: 2,
    createdAt: "2026-02-03T14:00:00Z"
  },
  {
    id: 3010,
    establishmentId: 1002,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 3,
    title: "Decent but can be crowded",
    content: "Food is good, no complaints there. The carbonara was creamy and the serving size was big. However, it gets really packed during dinner time and service slows down considerably. Also, the noise level can get quite high. Good for groups but not ideal if you're looking for a quiet meal.",
    helpful: 8,
    unhelpful: 4,
    createdAt: "2026-01-30T18:30:00Z"
  },

  // ========================================
  // AMS Golden Plate (ID: 1003) - 5 reviews
  // ========================================
  {
    id: 3011,
    establishmentId: 1003,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Hidden gem for Filipino food",
    content: "AMS Golden Plate is one of those places you'd walk past but shouldn't! Their sisig is amazing - crispy, savory, and perfectly seasoned. Prices are very student-friendly. The place is simple but clean. Definitely worth checking out if you're craving Filipino comfort food.",
    helpful: 16,
    unhelpful: 1,
    createdAt: "2026-02-11T13:20:00Z"
  },
  {
    id: 3012,
    establishmentId: 1003,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Best value for money around Taft!",
    content: "If you're on a tight budget, this is THE place. Huge servings at incredibly low prices. I got the pork adobo rice meal and it was delicious and filling. The lady who owns the place is super nice too. This is my new regular spot for sure!",
    helpful: 24,
    unhelpful: 0,
    createdAt: "2026-02-08T11:45:00Z"
  },
  {
    id: 3013,
    establishmentId: 1003,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Reminds me of home cooking",
    content: "The lutong bahay vibes here are real. Everything tastes home-cooked and authentic. Their sinigang is hearty and sour just the way I like it. Not fancy, but that's the charm. It's honest, good Filipino food at honest prices.",
    helpful: 14,
    unhelpful: 1,
    createdAt: "2026-02-04T12:00:00Z"
  },
  {
    id: 3014,
    establishmentId: 1003,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Great silog meals!",
    content: "Their tapsilog is really good - the beef tapa is tender and flavorful. Rice portions are generous and the egg is cooked perfectly. Service is quick which is great when you're in a hurry. Only downside is limited seating during peak hours.",
    helpful: 11,
    unhelpful: 2,
    createdAt: "2026-02-01T09:30:00Z"
  },
  {
    id: 3015,
    establishmentId: 1003,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "My go-to for cheap, filling meals",
    content: "Honestly can't beat the prices here. The food is consistently good and the portions are huge. I usually order the chicken adobo or the pork barbecue. Both are excellent. Staff is friendly and the turnover is fast. Perfect for broke college students like me!",
    helpful: 20,
    unhelpful: 1,
    createdAt: "2026-01-27T10:15:00Z"
  },

  // ========================================
  // 24 Chicken (ID: 1004) - 5 reviews
  // ========================================
  {
    id: 3016,
    establishmentId: 1004,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Korean fried chicken done right!",
    content: "The Yangnyeom flavor is AMAZING! Sweet, spicy, sticky perfection. The chicken is always fresh and crispy. Yes, there's usually a line but it moves fast. Pro tip: order ahead if you can. Best fried chicken near campus hands down!",
    helpful: 42,
    unhelpful: 1,
    createdAt: "2026-02-11T13:00:00Z"
  },
  {
    id: 3017,
    establishmentId: 1004,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Good value bundles",
    content: "Their bundle meals are perfect for sharing with friends. The Snow Cheese flavor is my favorite - creamy and not too sweet. Only complaint is the wait time can be long during dinner rush. But the food quality makes up for it!",
    helpful: 28,
    unhelpful: 2,
    createdAt: "2026-02-07T19:30:00Z"
  },
  {
    id: 3018,
    establishmentId: 1004,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Better than most Korean chicken places!",
    content: "I've tried a lot of Korean fried chicken and 24 Chicken is definitely up there with the best. The coating is super crispy even after it cools down a bit. The soy garlic flavor is my personal favorite - savory with just a hint of sweetness. Portions are generous too!",
    helpful: 35,
    unhelpful: 1,
    createdAt: "2026-02-05T17:00:00Z"
  },
  {
    id: 3019,
    establishmentId: 1004,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Solid late-night option",
    content: "Great for those late-night cravings after studying. The chicken stays crispy and the rice meals are filling. Spicy lovers will enjoy the hot sauce flavor. Sometimes the chicken pieces can be a bit small, but the taste is consistently good.",
    helpful: 17,
    unhelpful: 3,
    createdAt: "2026-02-02T21:45:00Z"
  },
  {
    id: 3020,
    establishmentId: 1004,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Addictive flavors!",
    content: "I'm obsessed with their honey butter chicken. It's the perfect balance of sweet and savory. The chicken is boneless which makes it easy to eat while studying. Definitely try their cheese balls too - they're dangerously addictive! Worth the occasional splurge.",
    helpful: 22,
    unhelpful: 0,
    createdAt: "2026-01-29T16:30:00Z"
  },

  // ========================================
  // El Poco Cantina (ID: 1005) - 5 reviews
  // ========================================
  {
    id: 3021,
    establishmentId: 1005,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Michelin-worthy tacos!",
    content: "The birria tacos are absolutely incredible! The meat is so tender and flavorful. The consommé for dipping is rich and savory. The portions are generous and the prices are very reasonable for the quality. This place deserves all the recognition it gets!",
    helpful: 56,
    unhelpful: 2,
    createdAt: "2026-02-13T18:20:00Z"
  },
  {
    id: 3022,
    establishmentId: 1005,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Authentic Mexican flavors",
    content: "Really impressed with the authenticity of the food here. The nachos are loaded with toppings and the guacamole is fresh. Can get crowded on weekends so arrive early. Slightly pricey but you're paying for quality ingredients and authentic taste.",
    helpful: 19,
    unhelpful: 3,
    createdAt: "2026-02-06T20:15:00Z"
  },
  {
    id: 3023,
    establishmentId: 1005,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Best burritos I've ever had!",
    content: "The California burrito is massive and packed with flavor. The carne asada is perfectly seasoned and the guac is fresh. Love the vibrant graffiti art inside - very Instagram-worthy! Service is friendly and efficient. This place is a must-try!",
    helpful: 33,
    unhelpful: 1,
    createdAt: "2026-02-09T19:00:00Z"
  },
  {
    id: 3024,
    establishmentId: 1005,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Great vibes and good food",
    content: "El Poco has this cool, laid-back vibe that I love. The quesadillas are cheesy and delicious. Portions are big enough to share. A bit expensive for a student budget but worth it for special occasions. The horchata is also really refreshing!",
    helpful: 15,
    unhelpful: 2,
    createdAt: "2026-02-03T15:30:00Z"
  },
  {
    id: 3025,
    establishmentId: 1005,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "Michelin Guide recognition well-deserved!",
    content: "Now I understand why this place got Michelin recognition. The flavors are bold and authentic. Tried the carnitas tacos and they were phenomenal - crispy edges, tender meat, fresh cilantro and onions. The salsa bar is a nice touch. Definitely coming back to try more items!",
    helpful: 41,
    unhelpful: 0,
    createdAt: "2026-01-31T18:45:00Z"
  },

  // ========================================
  // Obscure Café (ID: 1006) - 5 reviews
  // ========================================
  {
    id: 3026,
    establishmentId: 1006,
    username: "coffee_lover",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Perfect study spot with great coffee",
    content: "Love the cozy atmosphere here! The lattes are creamy and well-balanced. Not too bitter. Has good WiFi and comfortable seating - perfect for studying or working on projects. Can get a bit crowded during exam season though. Prices are student-friendly!",
    helpful: 33,
    unhelpful: 1,
    createdAt: "2026-02-14T11:00:00Z"
  },
  {
    id: 3027,
    establishmentId: 1006,
    username: "taft_foodie",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 5,
    title: "My favorite café near campus!",
    content: "Obscure Café is my go-to study spot. The Spanish latte is perfectly sweet and the pastries are always fresh. Love the minimalist aesthetic and the natural lighting. Staff is super friendly. Has become my second home during finals week!",
    helpful: 27,
    unhelpful: 0,
    createdAt: "2026-02-10T09:30:00Z"
  },
  {
    id: 3028,
    establishmentId: 1006,
    username: "foodie_lasalle",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Great coffee and chill vibes",
    content: "Their iced caramel macchiato is delicious! The café has this modern, Instagram-worthy interior. Good selection of pastries and sandwiches too. Only downside is limited power outlets, so come early if you need to charge your laptop. Overall, great spot to hang out!",
    helpful: 18,
    unhelpful: 2,
    createdAt: "2026-02-07T14:15:00Z"
  },
  {
    id: 3029,
    establishmentId: 1006,
    username: "hungry_archer",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 4,
    title: "Solid café with good food options",
    content: "Not just about coffee - their club sandwich is really good! The matcha latte is smooth and not too sweet. Prices are reasonable for a café. Atmosphere is calm and conducive for work. Sometimes there's a queue during lunch but it moves fairly quickly.",
    helpful: 14,
    unhelpful: 1,
    createdAt: "2026-02-04T13:00:00Z"
  },
  {
    id: 3030,
    establishmentId: 1006,
    username: "budget_bites",
    userAvatar: "../assets/img/default-avatar.png",
    rating: 3,
    title: "Nice café but a bit pricey",
    content: "The ambiance is really nice and the coffee is good quality. However, it's on the pricier side compared to other cafés around. The croissants are buttery and flaky though. Good for occasional treats but not for everyday student budget. WiFi is fast and reliable which is a plus!",
    helpful: 9,
    unhelpful: 5,
    createdAt: "2026-01-28T15:45:00Z"
  }
];
