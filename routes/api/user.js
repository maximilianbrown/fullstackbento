const express = require('express');
const router = express.Router();
const gravatar = require ('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require ('config')
const {check, validationResult} = require ('express-validator');

const Users = require('../../models/Users');


// @route   POST api/user
// @desc    Register new user
// @access  Public
router.post('/', [
    check('email', 'Please custome mesaage valid email').isEmail(),
    check('password', 'cuswtom error message password 6 chars').isLength({min:6})
    ], 
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    //1) --- see if user exists? ----------
    const{email, password} = req.body;
    
    try{
        let user = await Users.findOne({email})
        if(user) {
            return res.status(400).json({errors:[{msg: 'email already in use'}] });
            //error msg formatted this way to make it same as express validator errors
            //why is return necessary? - neede when not last res.status/res.json etc
        }

    //2) --- get users gravatar ----------
        //pass email into method and it will get us the url

        user = new Users({
            email,
            password
        });

    //3) --- encrypt password --------------
        //number passed in is 'rounds' 
        //higher the number the more secure but 10 is usually reccomended
    const salt = await bcrypt.genSalt(10);
        //hash takes plain text password and salt
    user.password = await bcrypt.hash(password, salt);

    //.save returns a promise > why need await/.then when promise?
    await user.save();


    //4) --- return jsonwebtoken ------------
    //res.send('user registered');

    const payload = {
        user:{
            id:user.id
        }
    };

    jwt.sign(
        payload, 
        config.get('jwtSecret'),
        {expiresIn:360000},
        (err,token) =>{
            if(err) throw err;
            res.json({token});
        }
        );

    }catch(err){
        console.error(err.message);
        res.status(500).send('err msg server error');
    }
});

module.exports = router;