/*
required files
*/
const nodemailer = require('nodemailer');

exports.sendEmailFunction = (url) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        /*
        email and password are hidden by using of env file
        */
        auth: {
            user: process.env.email,
            pass: process.env.password
        },
    });

    const mailOptions = {
        from: process.env.email,
        to: 'farahghrbi.dev@gmail.com',
        subject: 'movie-app password reset link ',
        text: 'Please go through the e-mail verifaction link provided in this mail:\n\n' + url
    };
    /*
    send mail from given mail id, by using authriozation info
    */
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("is it is invalid");
            console.log("error on sending mail--", err)
        }
        else
            console.log('result of sending mail-- ', info);
    });

}