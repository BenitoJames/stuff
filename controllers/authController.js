//authController

const User = require('../model/userModel');

// GET /login
exports.getLogin = (req, res) => {
    res.render('login');
};

// POST /login
exports.postLogin = async (req, res) => {
    const { identifier, password } = req.body;
    try {
        const user = await User.findOne({
            $or: [
                { email: identifier },
                { username: identifier }
            ]
        });

        if (!user) return res.render('login', { error: 'User not found' });
        if (user.password !== password) return res.render('login', { error: 'Incorrect password' });

        req.session.userId = user._id;
        res.redirect('/profile');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

// GET /register
exports.getRegister = (req, res) => {
    res.render('register');
};

// POST /register
exports.postRegister = async (req, res) => {
    const { username, email, password, confirmPassword, bio } = req.body;
    try {
        if (password !== confirmPassword) {
            return res.render('register', { error: 'Passwords do not match' });
        }

        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) return res.render('register', { error: 'User already exists' });

        const newUser = new User({ username, email, password, bio });
        await newUser.save();

        res.redirect('/login');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};