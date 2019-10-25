const jwt = require ('jsonwebtoken');
const config = require('config');
const User = require ('../models/Users');

module.exports = async function (req,res,next){
    //get token from header
    const token = req.header('x-auth-token');

    //check if not token
    if(!token){
        return res.status(401).json({msg: "no token, auth denied"});
    }

    //verify token if there i sone
    try{
        const decoded=jwt.verify(token, config.get('jwtSecret'));
        //check if admoin
        //req.user = decoded.user;
        req.authentication = await User.findById(decoded.user).select('authentication')
        next();
    } catch(err) {
        res.status(401).json({msg: 'Token is not valid'});
    }
};