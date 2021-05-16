/*
required files
*/

var jwt = require('jsonwebtoken');
var secret = "adcgfft";
try {
    var auth = function (req, res, next) {
        console.log("In auth");
        var token = req.headers.headers;
        console.log("+++++++++++++",req.headers.headers)       
      //  var token = req.headers.authorization;
        console.log(" token is in auth, ====>", token);
        var response = {
            'message': "Unauthorised user here "
        };
        /*
        verify the token and then send response to sendMail
        */
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                console.log(err)
                return res.status(401).send(response);
            }
            else {
                console.log("Decoded Data ===== > ", decoded);
                req.decoded = decoded;
                next();
            }
        });
    }
}
catch (err) {
    console.log("found error in generating token")
}
module.exports = { auth };