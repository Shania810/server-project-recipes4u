const { Router } = require('express');
const Recipe = require('../Models/Recipes.Models');
const router = Router();

router.get('/recipe/search', async (req, res) => {
    const { recipe } = req.query
    let searchRecipe
    try {
        if (recipe !== 'false') {
            searchRecipe = await Recipe.find({ $or: [{ title: { $regex: recipe.toLowerCase() } }, { category: { $regex: recipe.toLowerCase() } }, { ingredients: { $in: [recipe.toLowerCase()] } }, { preparation: { $in: [recipe.toLowerCase()] } }] }).populate('comments')
        } else {
            searchRecipe = await Recipe.find()
        }

        res.status(200).json(searchRecipe)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

});

router.get('/recipe/:idRecipe', async (req, res) => {
    const { idRecipe } = req.params
    try {
        const recipe = await Recipe.findById(idRecipe).populate('comments')
        res.status(200).json(recipe)
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

router.post('/recipe', async (req, res) => {
    const recipe = req.body
    try {
        const newRecipe = await Recipe.create(recipe)
        res.status(200).json(newRecipe)
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' })
    }
});

module.exports = router