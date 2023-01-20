const {Router} = require('express');
const Recipe = require('../Models/Recipes.Models');
const router = Router();

router.get('/recipe/search', async (req, res) => {
    const {Recipe} = req.body
    try {
        const searchRecipe = await Recipe.find({title: {$regex: Recipe}})
        res.status(200).json(searchRecipe)
    } catch (error) {
        res.status(500).json({message: 'Internal Server Error'})
    }

});

module.exports = router