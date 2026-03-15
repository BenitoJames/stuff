//bookmarkModel
const mongoose = require('mongoose');

const bookmarkSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    establishmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Bookmark', bookmarkSchema);
