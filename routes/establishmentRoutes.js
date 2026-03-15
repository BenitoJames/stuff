const express = require('express');
const router = express.Router();
const Establishment = require('../model/establishmentModel');
const Review = require('../model/reviewModel');

router.get('/', async (req, res) => {
    try {
        const search = req.query.search || '';
        const rating = req.query.rating || '';
        const tags = req.query.tags || null;

        let filter = {};

        if (search.trim() !== '') {
            filter.$or = [
                { name:        { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { cuisineType: { $regex: search, $options: 'i' } },
                { location:    { $regex: search, $options: 'i' } },
                { tags:        { $regex: search, $options: 'i' } },
            ];
        }

        if (rating !== '') {
            const r = parseFloat(rating);
            filter.rating = { $gte: r, $lt: r + 1 };
        }

        if (tags) {
            const tagArray = Array.isArray(tags) ? tags : [tags];
            filter.tags = { $in: tagArray };
        }

        const establishments = await Establishment.find(filter).lean();
        res.render('establishments', { establishments, query: req.query });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

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
        }).lean();
        res.render('search-results', { query, establishments, resultCount: establishments.length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const establishment = await Establishment.findById(req.params.id).lean();
        if (!establishment) return res.status(404).render('404');
        const reviews = await Review.find({ establishmentId: req.params.id })
            .populate('userId', 'username avatarUrl')
            .lean();
        res.render('details', { establishment, reviews });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
