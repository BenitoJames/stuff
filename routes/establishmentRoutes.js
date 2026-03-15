const express = require('express');
const router = express.Router();
const Establishment = require('../model/establishmentModel');
const Review = require('../model/reviewModel');

// GET /establishments
router.get('/', async (req, res) => {
    try {
        const establishments = await Establishment.find().lean();
        res.render('establishments', { establishments });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// GET /search/results  <-- MUST be before /:id
router.get('/search/results', async (req, res) => {
    try {
        const query = req.query.q || '';
        const establishments = await Establishment.find({
            $or: [
                { name:        { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { cuisineType: { $regex: query, $options: 'i' } },
                { tags:        { $regex: query, $options: 'i' } },
                { location:    { $regex: query, $options: 'i' } },
            ]
        });
        res.render('search-results', { query, establishments, resultCount: establishments.length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

// GET /establishments/:id  <-- AFTER search route
router.get('/:id', async (req, res) => {
    try {
        const establishment = await Establishment.findById(req.params.id).lean();
        if (!establishment) return res.status(404).render('404');
        const reviews = await Review.find({ establishmentId: req.params.id }).populate('userId', 'username avatarUrl').lean();
        res.render('details', { establishment, reviews });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
