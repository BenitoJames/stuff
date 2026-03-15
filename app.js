// app.js

const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const connectDB = require('./model/db');
connectDB();

const app = express();
const PORT = 3000;

// register handlebars (view)
app.engine('handlebars', engine({
    defaultLayout: 'main',       // uses main.handlebars
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// configure static files (CSS, JS, images from /public)
app.use(express.static(path.join(__dirname, 'public')));

// parse incoming request bodies (forms/JSON)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const session = require('express-session');

// SESSION MIDDLEWARE (must be before routes)
app.use(session({
    secret: 'agnorated-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
app.use('/', authRoutes);
app.use('/profile', profileRoutes);

const homeRoutes = require('./routes/homeRoutes');
app.use('/', homeRoutes);

const establishmentRoutes = require('./routes/establishmentRoutes');
app.use('/establishments', establishmentRoutes);
app.get('/search', async (req, res) => {
    try {
        const query = req.query.q || '';
        const Establishment = require('./model/establishmentModel');
        const establishments = await Establishment.find({
    $or: [
        { name:        { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { cuisineType: { $regex: query, $options: 'i' } },
        { tags:        { $regex: query, $options: 'i' } },
        { location:    { $regex: query, $options: 'i' } },
    ]
}).lean();
        res.render('search-results', { query, establishments, resultCount: establishments.length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

const reviewRoutes = require('./routes/reviewRoutes');
app.use('/review', reviewRoutes);

const ownerResponseRoutes = require('./routes/ownerResponseRoutes');
app.use('/review', ownerResponseRoutes);

const errorRoutes = require('./routes/errorRoutes');
app.use(errorRoutes);

// start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// http://localhost:3000/
