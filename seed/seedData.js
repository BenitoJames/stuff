//seedData
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('../model/userModel');
const Establishment = require('../model/establishmentModel');
const Review = require('../model/reviewModel');
const OwnerResponse = require('../model/ownerRespoonseModel');
const Bookmark = require('../model/bookmarkModel');

const seed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await User.deleteMany();
        await Establishment.deleteMany();
        await Review.deleteMany();
        await OwnerResponse.deleteMany();
        await Bookmark.deleteMany();
        console.log('Cleared existing data');

        // ===== USERS =====
        // 3 regular users matching Phase 1 reviewers + 2 owners + extra user
const users = await User.insertMany([
    {
        username: 'foodie_lasalle',
        email: 'foodie@agnorated.com',
        password: 'password123',
        bio: 'Always on the hunt for the best food around DLSU.',
        role: 'user',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'hungry_archer',
        email: 'archer@agnorated.com',
        password: 'password123',
        bio: 'Archer by heart, foodie by nature.',
        role: 'user',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'budget_bites',
        email: 'budget@agnorated.com',
        password: 'password123',
        bio: 'Eating well on a student budget since 2023.',
        role: 'user',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'taft_foodie',
        email: 'taft@agnorated.com',
        password: 'password123',
        bio: 'Taft Ave is my dining hall.',
        role: 'user',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'coffee_lover',
        email: 'coffee@agnorated.com',
        password: 'password123',
        bio: 'Fueled by caffeine and deadlines.',
        role: 'user',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'owner_aterica',
        email: 'aterica@agnorated.com',
        password: 'password123',
        bio: "Owner of Ate Rica's Bacsilog.",
        role: 'owner',
        avatarUrl: '/assets/img/default-avatar.png'
    },
    {
        username: 'owner_thebarn',
        email: 'thebarn@agnorated.com',
        password: 'password123',
        bio: 'Owner of The Barn by Borro.',
        role: 'owner',
        avatarUrl: '/assets/img/default-avatar.png'
    },
]);
        console.log('Users seeded');

        // ===== ESTABLISHMENTS =====
        const establishments = await Establishment.insertMany([
            {
                name: "Ate Rica's Bacsilog",
                description: "Ate Rica's Bacsilog On-The-Go a Filipino food stall favorite serving the ultimate comfort trio—garlic rice, fried egg, and savory meats. Their signature bacsilog, crispy bacon with rice and egg, is an affordable go-to that keeps students coming back.",
                cuisineType: 'Filipino',
                priceRange: '₱',
                location: 'Agno Food Court, 2305 Fidel A. Reyes, Malate',
                rating: 4.5,
                tags: ['Affordable', 'Fast Service', 'Silog Meals', 'Comfort Foods'],
                imageUrl: '/assets/img/aterica-main.jpg',
                gallery: [
                    '/assets/img/ate-rica-1.jpg',
                    '/assets/img/ate-rica-2.jpg',
                    '/assets/img/ate-rica-3.jpg'
                ]
            },
            {
                name: 'The Barn',
                description: 'The Barn by Borro brings big flavors in a cozy setting—serving Filipino comfort classics and Western favorites like fried chicken, steak, and pasta. With hearty portions and a warm vibe, it\'s a go-to hangout for students and foodies alike.',
                cuisineType: 'Filipino-Western',
                priceRange: '₱₱',
                location: 'Fidel A. Reyes, Malate',
                rating: 4.3,
                tags: ['Casual Dining', 'Filipino Fusion', 'Hangout Spots', 'Generous Portions'],
                imageUrl: '/assets/img/thebarn-main.jpg',
                gallery: [
                    '/assets/img/the-barn-1.jpg',
                    '/assets/img/the-barn-2.jpg',
                    '/assets/img/the-barn-3.jpg'
                ]
            },
            {
                name: 'AMS Golden Plate Restaurant',
                description: 'AMS Golden Plate Restaurant is a go-to for Filipino comfort food, serving silog meals, sisig, and hearty classics at student-friendly prices. With generous portions and a casual vibe, it\'s a staple dining spot near Taft.',
                cuisineType: 'Filipino-Asian',
                priceRange: '₱-₱₱',
                location: '2F 207, Sherwood Place, 2264 Taft Ave, Malate',
                rating: 4.4,
                tags: ['Affordable', 'Staple Dining', 'Student Friendly', 'Comfort Foods'],
                imageUrl: '/assets/img/ams-main.jpg',
                gallery: [
                    '/assets/img/golden-plate-1.jpg',
                    '/assets/img/golden-plate-2.jpg',
                    '/assets/img/golden-plate-3.jpg'
                ]
            },
            {
                name: '24 Chicken',
                description: '24 Chicken serves up Korean-style boneless fried chicken in bold flavors like Yangnyeom and Snow Cheese. With budget-friendly bundles and rice meals, it\'s a go-to comfort food spot for students and late-night cravings.',
                cuisineType: 'Korean',
                priceRange: '₱',
                location: 'EGI TAFT TOWER, 2339 Taft Ave, Malate',
                rating: 4.4,
                tags: ['Fried Chicken', 'Affordable', 'Student Friendly', 'Long Lines'],
                imageUrl: '/assets/img/24chicken-main.jpg',
                gallery: [
                    '/assets/img/24-chicken-1.jpg',
                    '/assets/img/24-chicken-2.jpg',
                    '/assets/img/24-chicken-3.jpg'
                ]
            },
            {
                name: 'El Poco Cantina',
                description: 'El Poco Cantina brings the bold flavors of Mexico to Malate, serving birria tacos, burritos, and nachos in a vibrant, graffiti-filled space. Affordable and flavorful, it\'s a go-to spot for students and late-night foodies.',
                cuisineType: 'Mexican',
                priceRange: '₱₱-₱₱₱',
                location: '945 Estrada St, Malate',
                rating: 4.7,
                tags: ['Michelin Selected', 'Street Foods', 'Casual Dining', 'Long Lines'],
                imageUrl: '/assets/img/elpoco-main.png',
                gallery: [
                    '/assets/img/el-poco-1.jpg',
                    '/assets/img/el-poco-2.jpg',
                    '/assets/img/el-poco-3.jpg'
                ]
            },
            {
                name: 'Obscure Café',
                description: 'Obscure Café is a student-favorite hangout serving creative lattes and light bites in a cozy, modern space. With affordable drinks and a welcoming vibe, it\'s a go-to spot for coffee lovers around Malate and Morayta.',
                cuisineType: 'Café',
                priceRange: '₱-₱₱',
                location: 'One Archers Place, 2311 Taft Ave, Malate',
                rating: 4.0,
                tags: ['Study Spots', 'Cozy Atmosphere', 'Coffee', 'Hangout Spots'],
                imageUrl: '/assets/img/obscure-main.jpeg',
                gallery: [
                    '/assets/img/obscure-cafe-1.jpg',
                    '/assets/img/obscure-cafe-2.jpg',
                    '/assets/img/obscure-cafe-3.jpg'
                ]
            },
        ]);
        console.log('Establishments seeded');

        // user map for easy reference
        const u = {
            foodie:   users[0]._id,
            archer:   users[1]._id,
            budget:   users[2]._id,
            taft:     users[3]._id,
            coffee:   users[4]._id,
            ownerAte: users[5]._id,
            ownerBarn:users[6]._id,
        };

        // establishment map
        const e = {
            aterica:    establishments[0]._id,
            barn:       establishments[1]._id,
            ams:        establishments[2]._id,
            chicken24:  establishments[3]._id,
            elpoco:     establishments[4]._id,
            obscure:    establishments[5]._id,
        };

        // ===== REVIEWS =====
        const reviews = await Review.insertMany([
            // Ate Rica's Bacsilog
            {
                userId: u.foodie,
                establishmentId: e.aterica,
                title: 'Best bacsilog near campus!',
                body: 'The bacon is perfectly crispy and the garlic rice is so flavorful! Ate Rica never disappoints. The portion size is generous for the price. I come here at least twice a week. Highly recommend the bacsilog combo - you won\'t regret it!',
                rating: 5,
                helpfulCount: 24,
                unhelpfulCount: 2
            },
            {
                userId: u.archer,
                establishmentId: e.aterica,
                title: 'Solid comfort food option',
                body: 'Great value for money. The serving is quite big and the taste is consistent every time I visit. Sometimes there\'s a bit of a wait during lunch rush but it\'s worth it. The longsilog is also really good!',
                rating: 4,
                helpfulCount: 15,
                unhelpfulCount: 1
            },
            {
                userId: u.budget,
                establishmentId: e.aterica,
                title: 'Perfect for students on a budget',
                body: 'This is my go-to spot when I need a filling meal without breaking the bank. The staff is friendly and service is quick even during peak hours. Definitely recommend to fellow students!',
                rating: 5,
                helpfulCount: 18,
                unhelpfulCount: 0
            },

            // The Barn
            {
                userId: u.foodie,
                establishmentId: e.barn,
                title: 'Amazing ambiance and food!',
                body: 'The Barn is perfect for hanging out with friends. Their fried chicken is crispy on the outside and juicy inside. The pasta is creamy and flavorful. A bit pricier than other options but worth it for the quality and atmosphere.',
                rating: 5,
                helpfulCount: 31,
                unhelpfulCount: 3
            },
            {
                userId: u.taft,
                establishmentId: e.barn,
                title: 'Great food, generous portions',
                body: 'Really enjoyed the steak here. Cooked perfectly medium rare as requested. The portions are huge - I couldn\'t finish mine! Service was a bit slow but the staff was very accommodating. Will definitely come back.',
                rating: 4,
                helpfulCount: 12,
                unhelpfulCount: 1
            },
            {
                userId: u.coffee,
                establishmentId: e.barn,
                title: 'Decent but can be crowded',
                body: 'Food is good, no complaints there. The carbonara was creamy and the serving size was big. However, it gets really packed during dinner time and service slows down considerably.',
                rating: 3,
                helpfulCount: 8,
                unhelpfulCount: 4
            },

            // AMS Golden Plate
            {
                userId: u.archer,
                establishmentId: e.ams,
                title: 'Hidden gem for Filipino food',
                body: 'AMS Golden Plate is one of those places you\'d walk past but shouldn\'t! Their sisig is amazing - crispy, savory, and perfectly seasoned. Prices are very student-friendly.',
                rating: 4,
                helpfulCount: 16,
                unhelpfulCount: 1
            },
            {
                userId: u.budget,
                establishmentId: e.ams,
                title: 'Best value for money around Taft!',
                body: 'If you\'re on a tight budget, this is THE place. Huge servings at incredibly low prices. I got the pork adobo rice meal and it was delicious and filling.',
                rating: 5,
                helpfulCount: 24,
                unhelpfulCount: 0
            },

            // 24 Chicken
            {
                userId: u.archer,
                establishmentId: e.chicken24,
                title: 'Korean fried chicken done right!',
                body: 'The Yangnyeom flavor is AMAZING! Sweet, spicy, sticky perfection. The chicken is always fresh and crispy. Yes, there\'s usually a line but it moves fast.',
                rating: 5,
                helpfulCount: 42,
                unhelpfulCount: 1
            },
            {
                userId: u.coffee,
                establishmentId: e.chicken24,
                title: 'Addictive flavors!',
                body: 'I\'m obsessed with their honey butter chicken. It\'s the perfect balance of sweet and savory. The chicken is boneless which makes it easy to eat while studying.',
                rating: 5,
                helpfulCount: 22,
                unhelpfulCount: 0
            },

            // El Poco Cantina
            {
                userId: u.foodie,
                establishmentId: e.elpoco,
                title: 'Michelin-worthy tacos!',
                body: 'The birria tacos are absolutely incredible! The meat is so tender and flavorful. The consommé for dipping is rich and savory. This place deserves all the recognition it gets!',
                rating: 5,
                helpfulCount: 56,
                unhelpfulCount: 2
            },
            {
                userId: u.archer,
                establishmentId: e.elpoco,
                title: 'Best burritos I\'ve ever had!',
                body: 'The California burrito is massive and packed with flavor. The carne asada is perfectly seasoned and the guac is fresh. This place is a must-try!',
                rating: 5,
                helpfulCount: 33,
                unhelpfulCount: 1
            },

            // Obscure Café
            {
                userId: u.coffee,
                establishmentId: e.obscure,
                title: 'Perfect study spot with great coffee',
                body: 'Love the cozy atmosphere here! The lattes are creamy and well-balanced. Not too bitter. Has good WiFi and comfortable seating - perfect for studying or working on projects.',
                rating: 4,
                helpfulCount: 33,
                unhelpfulCount: 1
            },
            {
                userId: u.taft,
                establishmentId: e.obscure,
                title: 'My favorite café near campus!',
                body: 'Obscure Café is my go-to study spot. The Spanish latte is perfectly sweet and the pastries are always fresh. Love the minimalist aesthetic and the natural lighting.',
                rating: 5,
                helpfulCount: 27,
                unhelpfulCount: 0
            },
        ]);
        console.log('Reviews seeded');

        // ===== OWNER RESPONSES =====
        await OwnerResponse.insertMany([
            {
                ownerId: u.ownerAte,
                establishmentId: e.aterica,
                reviewId: reviews[0]._id,
                body: 'Thank you so much! We work hard to keep everything fresh daily. The bacsilog is our pride and joy. See you again soon!'
            },
            {
                ownerId: u.ownerAte,
                establishmentId: e.aterica,
                reviewId: reviews[1]._id,
                body: 'Glad you enjoyed it! We always aim to give students the best value for their money. The longsilog is a hidden gem!'
            },
            {
                ownerId: u.ownerBarn,
                establishmentId: e.barn,
                reviewId: reviews[3]._id,
                body: 'Thank you for the kind words! We love having students come hangout. Hope to see you again for more good food and good times!'
            },
        ]);
        console.log('Owner responses seeded');

        // ===== BOOKMARKS =====
        await Bookmark.insertMany([
            { userId: u.foodie,  establishmentId: e.elpoco },
            { userId: u.foodie,  establishmentId: e.obscure },
            { userId: u.archer,  establishmentId: e.aterica },
            { userId: u.budget,  establishmentId: e.ams },
            { userId: u.coffee,  establishmentId: e.chicken24 },
        ]);
        console.log('Bookmarks seeded');

        console.log('✅ All seed data inserted successfully!');
        process.exit(0);

    } catch (err) {
        console.error('Seed error:', err);
        process.exit(1);
    }
};

seed();
