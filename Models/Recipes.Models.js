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
        required: true,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: "Comment",
        required: true
    }]
});

module.exports = model("Recipe", RecipeSchema);