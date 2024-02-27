const express = require('express');
const router = express.Router();
const tripsController = require('../controllers/trips');
const jwt = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
});
const authController = require("../controllers/authentication");


router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(auth, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

router
    .route('/login')
    .post(authController.login);

router
    .route('/register')
    .put(authController.register);

module.exports = router;