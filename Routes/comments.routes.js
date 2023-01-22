const { Router } = require("express");
const router = Router();
const Recipe = require('../Models/Recipes.Models');
const Comment = require("../Models/Comments.Models.js");


router.post("/comment/:idRecipe", async (req, res) => {
    const { idRecipe } = req.params
    const comment = req.body
    try {
        const newComment = await Comment.create({ ...comment, recipe: idRecipe })

        const commentsRecipe = await Comment.find({ recipe: idRecipe })
        const ratesRecipe = commentsRecipe.map(({ rate }) => rate)
        const averageRatesRecipe = Math.round(ratesRecipe.reduce((acc, cu) => acc + cu, 0) / ratesRecipe.length)

        await Recipe.findByIdAndUpdate(idRecipe, { rate: averageRatesRecipe }, { new: true })
        const updateRecipe = await Recipe.findByIdAndUpdate(idRecipe, { $push: { comments: newComment } }, { new: true })
        res.status(200).json(updateRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

module.exports = router