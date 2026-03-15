//profileController

const User = require('../model/userModel');
const Review = require('../model/reviewModel');
const Bookmark = require('../model/bookmarkModel');

// GET /profile or /profile/:username
exports.getProfile = async (req, res) => {
    try {
        const usernameParam = req.params.username;

        // If username param exists, fetch that user, else use logged-in user
        let user;

        if (usernameParam) {
            user = await User.findOne({ username: usernameParam }).lean();
        } else {
            if (!req.session.userId) {
                return res.redirect('/login');
            }

            user = await User.findById(req.session.userId).lean();
        }

        if (!user) return res.status(404).send('User not found');

        const isMainUser = user._id.toString() === req.session.userId?.toString();

        // Fetch reviews
        const reviews = await Review.find({ userId: user._id })
            .populate('establishmentId', 'name location')
            .lean();

        // Fetch bookmarks only for main user
        const bookmarks = await Bookmark.find({ userId: user._id })
            .populate('establishmentId', 'name location')
            .lean();
        

        // User data with default avatar
        const userData = {
            username: user.username,
            bio: user.bio || '',
            avatarUrl: user.avatarUrl || '/assets/img/default-avatar.png',
            isMainUser
        };

        res.render('profile', { user: userData, reviews, bookmarks });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.getEditProfilePage = async (req, res) => {
    try {
        const user = await User.findById(req.session.userId).lean();

        if (!user) return res.status(404).send('User not found');

        res.render('edit-profile', {
            user
        });

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};

exports.updateProfile = async (req, res) => {
    try {

        const { username, bio } = req.body;

        const updateData = {
            username,
            bio
        };

        if (req.file) {
            updateData.avatarUrl = '/uploads/avatars/' + req.file.filename;
        }

        await User.findByIdAndUpdate(req.session.userId, updateData);

        res.redirect('/profile');

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
};