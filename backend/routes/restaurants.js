const router = require('express').Router();
let Restaurant = require('../models/restaurant.model');
router.route('/city/:city').get((req, res) => {
  Restaurant.find({ city: req.params.city })
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/').get((req, res) => {
  Restaurant.find()
    .then((restaurants) => res.json(restaurants))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/:id').get((req, res) => {
  Restaurant.findById(req.params.id)
    .then((restaurant) => res.json(restaurant))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/add').post((req, res) => {
  const { name, city, cuisine, bestFood, rating, image, description } = req.body;
  const newRestaurant = new Restaurant({
    name,
    city,
    cuisine,
    bestFood,
    rating,
    image,
    description,
  });
  newRestaurant
    .save()
    .then(() => res.json('Restaurant added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').put((req, res) => {
  Restaurant.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.json('Restaurant updated!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Restaurant.findByIdAndDelete(req.params.id)
    .then(() => res.json('Restaurant deleted!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;