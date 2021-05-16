/*
required files
*/
var seatService = require('../services/seatServices');

/*
signup function and provide some validations
*/
module.exports.seats = (req, res) => {
    req.checkBody('movieName', 'Movie Name is not valid').isLength({ min: 1 });
    req.checkBody('bookedSeat', 'booked Seat is not valid').isLength({ min: 1 });
    req.checkBody('time', 'time is not valid').isLength({ min: 1 })
    req.checkBody('date', 'date should be valid').isLength({ min: 1 })
    req.checkBody('place', 'place is not valid').isLength({ min: 1 })

    var errors = req.validationErrors();
    var response = {};
    /*
    check validations if error came then send error response
    */
    if (errors) {
        response.success = false;
        response.error = errors;
        return res.status(422).send(response);
    } else {
        /*
         send the req to the services and then callback
        */
        seatService.seats(req.body, (err, data) => {
            if (err) {
                console.log("error in Controller  =====>> ", err);
                return res.status(500).send({
                    message: err
                })
            } else {
                console.log("Data in Controller  =====>> ", data);
                return res.status(200).send({
                    message: data
                });
            }

        });

    }
};


/*
getBookedSeats function check function if no error then provide to services
*/
exports.getSeats = (req, res) => {
    /*
    send the req to the services and then callback
    */
    seatService.getSeats(req, (err, data) => {
        var response = {};
        if (err) {
            console.log("error");
            return callback(err);
        } else {
            response.success = true;
            response.result = data;
            res.status(200).send(response);
            console.log("ok.....", response);
        }
    })
};