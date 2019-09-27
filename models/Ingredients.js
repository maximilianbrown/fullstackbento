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
    nutrition:{
        macros:{
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
            }
        },
        micros:{
            vitA:{
                type: Number,
                required: true
            },
            vitD:{
                type: Number,
                required: true
            },
            vitE:{
                type: Number,
                required: true
            },
            vitK:{
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
        }
    },
    cost:{
        type: Number,
        required: true
    }
})