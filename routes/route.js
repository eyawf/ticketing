/*
required files
*/
var verify = require('../authantication/index');
const user = require('../controller/controller')
const movie = require('../controller/movieController')
const seat = require('../controller/seatController')
const express = require('express');
const router = express.Router();
router.post('/login', user.login);
router.post('/signup', user.signup);
router.post('/forgotPassword', user.forgotPassword);
router.post('/resetPassword', verify.auth, user.resetPassword);
router.post('/movieDetail', movie.movie)
router.get('/getMovieDetail', movie.getAllMovieDetail)
router.post('/getMovie', movie.getMovieDetail)
router.post('/getTrailer', movie.getTrailer)
router.post('/seats',seat.seats)
router.get('/getAllUser', verify.auth, user.getAllUser);
router.get('/getSeatBooked', seat.getSeats)


module.exports = router;