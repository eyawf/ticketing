/*
required files
*/
var usermodel = require('../app/models/userModels')

/*
for signup 
*/
exports.signup = (req, callback) => {
    /*
    send data to model and callback from there and here both
    */
    usermodel.signup(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/*
for login 
*/
exports.login = (req, callback) => {
    /*
    send data to model and callback from there and here both
    */
    usermodel.login(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/*
for forgot password
*/
exports.forgotPassword = (req, callback) => {
    /*
    send data to model and callback from there and here both
    */
    usermodel.forgotPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/*
for reset password
*/
exports.resetPassword = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    usermodel.resetPassword(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}

/*
for updated password
*/
exports.updatePassword = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    usermodel.updatePassword(req, (err, data) => {
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
exports.getAllUser = (req, callback) => {
    /*
   send data to model and callback from there and here both
   */
    usermodel.getAllUser(req, (err, data) => {
        if (err) {
            return callback(err);
        } else {
            return callback(null, data);
        }
    })
}