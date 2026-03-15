//reviewRoutes

const express = require('express');
const router = express.Router();
const multer = require('multer');
const reviewController = require('../controllers/reviewController');
const { toggleBookmark } = require('../controllers/bookmarkController'); // bookmark logic

const upload = multer({
    dest: 'uploads/'
});

// GET /review/create/:establishmentId
router.get('/create/:establishmentId', reviewController.getCreateReviewPage);

// POST /review/create/:establishmentId
router.post('/create/:establishmentId', upload.array('images', 5), reviewController.createReview);

// GET /review/create/:reviewId
router.get('/edit/:reviewId', reviewController.getEditReviewPage);

// POST /review/edit/:reviewId
router.post('/edit/:reviewId', upload.array('images', 5), reviewController.editReview);

// POST /review/delete/:reviewId
router.post('/delete/:reviewId', reviewController.deleteReview);

// POST /bookmark/:establishmentId
router.post('/bookmark/:establishmentId', toggleBookmark);

module.exports = router;