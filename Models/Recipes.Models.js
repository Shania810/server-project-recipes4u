const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: ["prato principal", "massas", "acompanhamento", "drink", "sobremesa"],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    preparation: [String],
    ingredients: [String],
    time: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ["easy", "moderate", "hard"],
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    //default: []

});

module.exports = model("Recipe", RecipeSchema);