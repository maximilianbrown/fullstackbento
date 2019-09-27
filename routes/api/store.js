const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require ('express-validator')

//@route    /store/
//@desc     get all products
//@acess    public
router.get('/')

//@route    /store/bentos
//@desc     get all bentos products
//@acess    public
router.get('/')

//@route    /store/customize
//@desc     empty customizer
//@acess    public
router.get('/customize')

//@route    /store
//@desc     customize specific bento
//@acess    public
router.get('/customize/:id')

//@route    /store/:id
//@desc     get all products
//@acess    public
router.get('/:id')