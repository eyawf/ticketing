/*
required files
*/
var movieModel = require('../app/models/movieModels')

/*
send message or add message by sender
*/
/*
for signup 
*/
exports.movies = (req, callback) => {
    console.log('In movie services', req)
    /*
    send data to model and callback from there and here both
    */
    movieModel.movieDetail(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/*
for get all the data from the database
*/
exports.getAllMovieDetail = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    movieModel.getAllMovieDetails(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}


/*
for get movie details from the database
*/
exports.getMovieDetail = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    movieModel.getMovieDetails(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}


/*
for get Trailers details from the database
*/
exports.gettrailers = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    movieModel.getTrailers(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

