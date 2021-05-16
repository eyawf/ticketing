/*
required files
*/

const mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
/*
create instance of Schema
*/
var mongoSchema = mongoose.Schema;
/*
define schema and validations
*/
var movieSchema = new mongoSchema({
    "movieName": { type: String, required: [true, "movieName is required"] },
    "castName": { type: String, required: [true, "castName is required"] },
    "directorName": { type: String, required: [true, "directorName is required"] },
    "rating": { type: String, required: [true, "rating is required"] },
    "details": { type: String, required: [true, "details is required"] },
    "releaseDate": { type: Date, required: [true, "releaseDate is required"] },
    "poster": { type: String, required: [true, "poster is required"] },
    "trailer": { type: String, required: [true, "trailer link is required"] },
}, {
        timestamps: true
    });

/*
declare a function moviemodel
*/
function moviemodel() { }
var movie = mongoose.model('movieDetail', movieSchema);

/*
creata a movie function 
*/
moviemodel.prototype.movieDetail = (body, callback) => {

    /*
    check whether movie is already exists or not
    */
    movie.find({ 'movieName': body.movieName }, (err, data) => {
        if (err) {
            console.log("Error in movieschema for movie");
            return callback(err);
        } else if (data.length > 0) {
            console.log("movieName already exists!")
            var response = { "error": true, "message": "MovieName already exists ", "errorCode": 404 };
            return callback(response);
        }
        /*
        if email is not there then create a new account
        */
        else {
            const newMovie = new movie(
                {
                    "movieName": body.movieName,
                    "castName": body.castName,
                    "directorName": body.directorName,
                    "rating": body.rating,
                    "details": body.details,
                    "releaseDate": body.releaseDate,
                    "poster": body.poster,
                    "trailer":body.trailer
                }
            );
            /*
            then save the new data
            */
            newMovie.save((err, result) => {
                if (err) {
                    console.log("error came");
                    console.log("error in model file", err);
                    return callback(err);
                } else {
                    console.log("data save successfully", result);
                    console.log("registered successfully");
                    callback(null, result);
                    console.log("no return statements ..registered successfully");

                }
            })
        }
    });

}


/*
getAllUser function for take all the data from DataBase
*/
moviemodel.prototype.getAllMovieDetails = (req, callback) => {
    movie.find({}, (err, data) => {
        if (err) {
            callback("error is in model" + err)
        } else {
            callback(null, data);
        }
    })
}


/*
getMovie detail function for take movie the data from DataBase
*/
moviemodel.prototype.getMovieDetails = (req, callback) => {

    //  console.log("movieName", req.body);
    movie.find({ "movieName": req.body.movieName }, (err, data) => {
        if (err) {
            callback("error is in Moviemodel" + err)
        } else {
            // console.log("data in models==>", data);
            callback(null, data);
        }
    })
}


/*
getTrailers detail function for take movie the data from DataBase
*/
moviemodel.prototype.getTrailers = (req, callback) => {

    //  console.log("movieName", req.body);
    movie.find({ "movieName": req.body.movieName }, (err, data) => {
        if (err) {
            callback("error is in Moviemodel" + err)
        } else {
            // console.log("data in models==>", data);
            callback(null, data);
        }
    })
}


// moviemodel.prototype.getMovieDetails = (body, callback) => {

//     /*
//     check whether email is already exists or not
//     */
//    console.log("body", body);

//    movie.find({ "movieName": body.movieName }, (err, data) => {
//         if (err) {
//             console.log("Error in getMovieDetails movie schema ");
//             return callback(err);
//         } else {
//             console.log("movieName", body.movieName);
//             console.log("data save successfully", data);
//             console.log("registered successfully");
//             callback(null, data);
//             console.log("no return statements ..registered successfully");

//         }
//     })
// }

module.exports = new moviemodel();