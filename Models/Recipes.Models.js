const { Schema, model } = require("mongoose");

const RecipeSchema = new Schema({
    title: {
        type: String,
        required: true,
        lowercase: true
    },
    category: {
        type: String,
        enum: ["prato principal", "massas", "acompanhamento", "drinks", "sobremesa"],
        required: true
    },
    description: {
        type: String,
        required: true,
        lowercase: true
    },
    preparation: [{ type: String, lowercase: true, trim: true }],
    ingredients: [{ type: String, lowercase: true, trim: true }],
    time: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    level: {
        type: String,
        enum: ["😄 Fácil", "😅 Moderado", "😓 Difícil"],
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
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
});

module.exports = model("Recipe", RecipeSchema);