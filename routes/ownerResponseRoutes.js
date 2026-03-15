//ownerResponseRoutes

const express = require('express');
const router = express.Router();

const Review = require('../model/reviewModel');

router.post('/owner-response/:reviewId', async (req, res) => {

    try {

        const reviewId = req.params.reviewId;
        const { response } = req.body;

        await Review.findByIdAndUpdate(
            reviewId,
            { ownerResponse: response }
        );

        res.redirect('back');

    } catch (err) {

        console.error(err);
        res.status(500).send('Server Error');
        
    }

});

module.exports = router;