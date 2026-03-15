//reviewModel
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    establishmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    images: [{ type: String }],
    helpfulCount: { type: Number, default: 0 },
    unhelpfulCount: { type: Number, default: 0 },
    edited: { type: Boolean, default: false },
    ownerResponse: { type: String, default: ''}
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
