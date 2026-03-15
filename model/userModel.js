//usermodel
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: true },
    avatarUrl: { type: String, default: '/assets/img/default-avatar.png' },
    bio: { type: String, default: '' },
    role: { type: String, enum: ['user', 'owner'], default: 'user' },
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Establishment' }]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
