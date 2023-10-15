const JWT = require("jsonwebtoken");

exports.EncodeToken = (req, res) =>{
    return JWT.sign({
        email: email,
        id: user_id
    });
}

exports.DecodeToken = (req, res) => {
    try{
        return JWT.verify(token, secrectKey);
    }
    catch(err) {
        return null;
    }
}

module.exports = createToken;