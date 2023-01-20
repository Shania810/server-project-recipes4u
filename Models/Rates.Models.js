const { Schema, model } = require("mongoose");

const RateSchema = new Schema({
    rate: {
        type: Number,
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    },
});

module.exports = model("Rate", RateSchema);