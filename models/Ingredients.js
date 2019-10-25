const mongoose = require('mongoose');

const IngredientSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
            kcal:{
                type: Number,
                required: true
            },
            protein:{
                type: Number,
                required: true
            },
            carb:{
                type: Number,
                required: true
            },
            fat:{
                type: Number,
                required: true
            },
            // vitA:{
            //     type: Number,
            //     required: true
            // },
            // vitD:{
            //     type: Number,
            //     required: true
            // },
            // vitE:{
            //     type: Number,
            //     required: true
            // },
            // vitK:{
            //     type: Number,
            //     required: true
            // },
            // vitB1:{
            //     type: Number,
            //     required: true
            // },
            // vitB2:{
            //     type: Number,
            //     required: true
            // },
            // vitB3:{
            //     type: Number,
            //     required: true
            // },
            // vitB5:{
            //     type: Number,
            //     required: true
            // },
            // vitB6:{
            //     type: Number,
            //     required: true
            // },
            // vitB7:{
            //     type: Number,
            //     required: true
            // },
            // vitB9:{
            //     type: Number,
            //     required: true
            // },
            // vitB12:{
            //     type: Number,
            //     required: true
            // },
            // vitC:{
            //     type: Number,
            //     required: true
            // },
            // vitH:{
            //     type: Number,
            //     required: true
            // },
            // calcium:{
            //     type: Number,
            //     required: true
            // },
            // phosphorus:{
            //     type: Number,
            //     required: true
            // },
            // potassium:{
            //     type: Number,
            //     required: true
            // },
            // magnesium:{
            //     type: Number,
            //     required: true
            // },
            // salt:{
            //     type: Number,
            //     required: true
            // },
            // iron:{
            //     type: Number,
            //     required: true
            // },
            // zinc:{
            //     type: Number,
            //     required: true
            // },
            // copper:{
            //     type: Number,
            //     required: true
            // },
            // chromium:{
            //     type: Number,
            //     required: true
            // },
            // fluoride:{
            //     type: Number,
            //     required: true
            // },
            // iodine:{
            //     type: Number,
            //     required: true
            // },
            // selenium:{
            //     type: Number,
            //     required: true
            // },
            // manganese:{
            //     type: Number,
            //     required: true
            // },
            // molybdenum:{
            //     type: Number,
            //     required: true
            // },

    cost:{
        type: Number,
        required: true
    }
});

module.exports = Ingredient = mongoose.model('ingredient', IngredientSchema)