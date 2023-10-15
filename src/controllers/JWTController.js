const JWT = require("jsonwebtoken");
const { secrectKey } = require("../utility/loginSecretKey");



const singIn = (req, res) => {
    const userData = req.body.data;
    if(
        userData.email === 'mdakkasali013@gmail.com' &&
        userData.password === '123456'
    ) {
        const payload = {
            name:'akkas',
            email: 'mdakkasali013@gmail.com',
            role: 'user'
        };
        const token = JWT.sign(payload, secrectKey);
        res.status(200).json({
            userToken: token
        });
    }
    else {
        res.status(400).end("Unauthorized user")
    }
    
}

module.exports = {
    singIn
}