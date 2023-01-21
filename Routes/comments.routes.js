const { Router } = require("express");
const router = Router();
const Comment = require("../Models/Comments.Models.js");


router.post("/comment", async (req, res) => {
    const comment= req.body
    try {
        const newComment = await Comment.create(comment)
        res.status(200).json(newComment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
});

module.exports= router