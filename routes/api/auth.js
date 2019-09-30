const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require ('config')
const {check, validationResult} = require ('express-validator');

const User= require ('../../models/Users');

// @route   GET api/auth
// @desc    auth route
// @access  Public
router.get('/', auth, async (req, res) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err){
        console.errror(err.message);
        res.status(500).send('server error');
    }
});

// @route   POST api/user
// @desc    login user
// @access  Public
router.post('/', [
    check('email', 'Please custome mesaage valid email').isEmail(),
    check('password', 'pass required').exists()
    ], 
    async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }

    //1) --- see if user exists? ----------
    const{email, password} = req.body;
    
    try{
        //makes request to DB to get user
        let user = await User.findOne({email})
        //if no user, return err
        if(!user) {
            return res.status(400).json({errors:[{msg: 'invalid credentials'}] });
            //error msg formatted this way to make it same as express validator errors
            //why is return necessary? - neede when not last res.status/res.json etc
        }

        //2) match passs

        const isMatch = await bcrypt.compare(password, user.password);
        //i guess this returns a boolean

        if(!isMatch){
            return res.status(400).json({errors:[{msg:'invalid credentials'}]});
        }



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