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
var userSchema = new mongoSchema({
    "firstname": { type: String, required: [true, "First name is required"] },
    "lastname": { type: String, required: [true, "LastName is required"] },
    "email": { type: String, required: [true, "Email is required"] },
    "phone": { type: String, required: [true, "phone is required"] },
    "password": { type: String, required: [true, "password is required"] },
}, {
        timestamps: true
    });

/*
declare a function usermodel
*/
function usermodel() { }
var user = mongoose.model('user', userSchema);
/*
create a function for password encrypt
*/
var salt = bcrypt.genSaltSync(10);
function hash(password) {
    var hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

/*
creata a signup function 
*/
usermodel.prototype.signup = (body, callback) => {

    /*
    check whether email is already exists or not
    */
    user.find({ 'email': body.email }, (err, data) => {
        if (err) {
            console.log("Error in signup user schema ");
            return callback(err);
        } else if (data.length > 0) {
            console.log("Email already exists!")
            var response = { "error": true, "message": "Email already exists ", "errorCode": 404 };
            return callback(response);
        }
        /*
        if email is not there then create a new account
        */
        else {
            const newUser = new user({

                "firstname": body.firstname,
                "lastname": body.lastname,
                "email": body.email,
                "phone": body.phone,
                "password": hash(body.password)
            });
            /*
            then save the new data
            */
            newUser.save((err, result) => {
                if (err) {
                    console.log("error came");
                    console.log("error in model file", err);
                    return callback(err);
                } else {
                    console.log(body.firstname);
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
create a login function for login
*/
usermodel.prototype.login = (body, callback) => {
    user.find({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data.length > 0) {
            bcrypt.compare(body.password, data[0].password, (err, res) => {
                if (err) {
                    return callback(err);
                }
                /*
                  if email and password are matching then login succeccfully
                */
                else if (res) {
                    console.log(data);
                    console.log("congratz...!login successfully");
                    return callback(null, data);
                } else {
                    console.log("incorrect password please check it once ");
                    return callback("Incorrect password").status(500);
                }
            });
        } else {
            console.log(body.email);
            console.log(body.password);
            console.log("username is not in database please check it.")
            return callback("Invalid User");
        }
    });
}

/*
create a forgot password function for forgot password
*/
usermodel.prototype.forgotPassword = (body, callback) => {
    /*
    find email form the data
    */
    user.find({ "email": body.email }, (err, data) => {
        if (err) {
            return callback(err);
        } else if (data) {
            console.log("data in models==>", data[0]._id);
            return callback(null, data)
        }
        else {
            return callback("Invalid User ");
        }
    });
}

/*
create a reset password function for reset Password
*/
usermodel.prototype.resetPassword = (req, callback) => {
    console.log(' in model--data:--', req.decoded);
    console.log(' in model--body:--', req.body);
    var newpassword = bcrypt.hashSync(req.body.password, salt);
    console.log('new pass bcrypt--', newpassword);

    /*
    update the data from database
    */
    user.updateOne({ email: req.decoded.email }, { password: newpassword }, (err, result) => {
        if (err) {
            callback(err);
        }
        else {
            console.log("result in else", result)
            callback(null, result);
        }
    });
}


/*
getAllUser function for take all the data from DataBase
*/
usermodel.prototype.getAllUser = (req, callback) => {
    user.find({}, (err, data) => {
        if (err) {
            callback("error is in model" + err)
        } else {
            callback(null, data);
        }
    })
}



module.exports = new usermodel();