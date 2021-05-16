/*
required files
*/
const jwt = require('jsonwebtoken');
module.exports = {
    /*
    Generate a token with the help of payload
    */
    GenerateToken(payload) {
        const token = jwt.sign({ payload }, 'secretkey', { expiresIn: '2h' }) //expires in two hours
        const obj = {
            success: true,
            message: 'Token Generated !!',
            token: token
        }
        return obj;
    }
}