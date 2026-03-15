//establishmentModel
const mongoose = require('mongoose');

const establishmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    cuisineType: { type: String },
    priceRange: { type: String },
    location: { type: String },
    rating: { type: Number, default: 0 },
    tags: [{ type: String }],
    imageUrl: { type: String },
    gallery: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Establishment', establishmentSchema);
