const Review = require('../model/reviewModel');

const tags = [
    'Affordable',
    'Western',
    'Spicy',
    'Long Lines',
    'Lutong Bahay',
    'Vegetarian',
    'Quick Service',
    'Cozy Ambiance'
];


// Show create review page
exports.getCreateReviewPage = async (req, res) => {
    try {

        if (!req.session.userId) {
            return res.redirect('/login');
        }

        const { establishmentId } = req.params;

        res.render('review-form', {
            formTitle: "Write Your Review",
            formAction: `/review/create/${establishmentId}`,
            review: {},
            stars: [1,2,3,4,5],
            tags,
            submitText: "Publish Review"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


// Create a new review
exports.createReview = async (req, res) => {

    try {

        if (!req.session.userId)
            return res.status(401).send('Login required');

        const { establishmentId } = req.params;

        const existingReview = await Review.findOne({
            userId: req.session.userId,
            establishmentId
        });

        if (existingReview) {
            return res.send("You already reviewed this establishment.");
        }

        const { reviewTitle, reviewContent, rating, tags } = req.body;

        const images = req.files
            ? req.files.map(file => file.filename)
            : [];

        const newReview = new Review({
            userId: req.session.userId,
            establishmentId,
            title: reviewTitle,
            body: reviewContent,
            rating,
            tags: tags ? JSON.parse(tags) : [],
            images
        });

        await newReview.save();

        res.redirect(`/establishments/${establishmentId}`);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


// Show edit review page
exports.getEditReviewPage = async (req, res) => {

    try {

        const { reviewId } = req.params;

        const review = await Review.findById(reviewId);

        if (!review)
            return res.status(404).send('Review not found');

        res.render('review-form', {
            formTitle: "Edit Your Review",
            formAction: `/review/edit/${reviewId}`,
            review,
            stars: [1,2,3,4,5],
            tags,
            submitText: "Update Review"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


// Edit existing review
exports.editReview = async (req, res) => {

    try {

        if (!req.session.userId)
            return res.status(401).send('Login required');

        const { reviewId } = req.params;
        const { reviewTitle, reviewContent, rating } = req.body;

        const review = await Review.findById(reviewId);

        if (!review)
            return res.status(404).send('Review not found');

        if (review.userId.toString() !== req.session.userId)
            return res.status(403).send('Forbidden');

        review.title = reviewTitle;
        review.body = reviewContent;
        review.rating = rating;
        review.edited = true;

        await review.save();

        res.redirect('/profile');

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};


// Delete review
exports.deleteReview = async (req, res) => {

    try {

        if (!req.session.userId)
            return res.status(401).send('Login required');

        const { reviewId } = req.params;

        const review = await Review.findById(reviewId);

        if (!review)
            return res.status(404).send('Review not found');

        if (review.userId.toString() !== req.session.userId)
            return res.status(403).send('Forbidden');

        await review.deleteOne();

        res.redirect('/profile');

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};