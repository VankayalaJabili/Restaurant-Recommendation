const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const restaurantSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true },
  cuisine: { type: [String], required: true },
  bestFood: { type: String, required: true },
  rating: { type: Number, required: true },
  image: { type: String },
  description: { type: String }, 
});
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
module.exports = Restaurant;