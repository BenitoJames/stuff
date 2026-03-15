//ownerResponseModel
const mongoose = require('mongoose');

const ownerResponseSchema = new mongoose.Schema({
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    establishmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Establishment', required: true },
    reviewId: { type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true },
    body: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('OwnerResponse', ownerResponseSchema);
