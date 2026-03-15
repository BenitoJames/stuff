// profileRoutes

const express = require('express');
const router = express.Router();
const multer = require('multer');
const profileController = require('../controllers/profileController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/avatars');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Main logged-in profile
router.get('/', profileController.getProfile);

// GET Edit profile page
router.get('/edit-profile', profileController.getEditProfilePage);

// POST Update profile
const upload = multer({ storage });

router.post(
    '/edit-profile',
    upload.single('avatar'),
    profileController.updateProfile
);

// Other users profile by username
router.get('/:username', profileController.getProfile);

module.exports = router;