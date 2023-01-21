const { Router } = require('express');
const Recipe = require('../Models/Recipes.Models');
const router = Router();

router.get('/recipe/search', async (req, res) => {
    const { recipe } = req.body
    try {
        const searchRecipe = await Recipe.find({ title: { $regex: recipe } })
        res.status(200).json(searchRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});



module.exports = router