const express = require('express');
const router = express.Router();
const config = require('config');
const level = require('../../middleware/level');

const Ingredient = require ('../../models/Ingredients');


// @route   POST api/ingredients
// @desc    Add new ingredient
// @access  Admin
router.post('/ingredients', level, async(req,res)=>{

    if(!req.authentication.level==="admin"){
        res.status(401).send('access deinied');
    }else{
        try {
            const newIngredinet = new Ingredient(req.body);
            await newIngredinet.save();
            res.json({msg:"ingredient saved"})
        } catch (error) {
            console.error(error.message);
            res.status(500).send('server error');
        }
    }
});


// @route   GET api/ingredients
// @desc    get all ingredients
// @access  Admin
router.get('/ingredients', async(req,res)=>{
    try {
        const ingredients = await Ingredient.find();
        res.json(ingredients)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('server error');
    }
});





module.exports = router;