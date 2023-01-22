const { Schema, model } = require("mongoose");

const CommentSchema = new Schema({
    user: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    recipe: {
        type: Schema.Types.ObjectId,
        ref: "Recipe",
        required: true
    }
});

module.exports = model("Comment", CommentSchema);