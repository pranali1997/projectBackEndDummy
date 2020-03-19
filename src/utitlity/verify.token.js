const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

module.exports = {
    tokenFun(userData, callback) {

        const secretKey = "secretKey";
        login = {
            userId: userData.id
        }

        jwt.sign(login, secretKey, (err, token) => {
            if (err) {
                console.log("error has been occurred", err);

            }
            else {
                return callback(null, token)
            }a
        });
    },

    decodePassword(userData, password, callback) {        
        bcrypt.compare(userData, password, function (err,res) {            
            if (!res) {
                return callback("unsuccessful")
            }            
            return callback(null, password);

        });

    }
}