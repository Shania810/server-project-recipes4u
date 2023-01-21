const { Router } = require('express');
const Recipe = require('../Models/Recipes.Models');
const router = Router();

router.get('/recipe/best', async (req, res) => {
    try {
        const desserts = await Recipe.find({category:"sobremesa"})
        const dessertsRates = desserts.map((dessert) => dessert.rate )
        const mostRatedDessert = Math.max(...dessertsRates)
        const bestDessert = await Recipe.findOne({category:"sobremesa", rate: mostRatedDessert})

        const pastas = await Recipe.find({category:"massas"})
        const pastasRates = pastas.map((pasta) => pasta.rate )
        const mostRatedPasta = Math.max(...pastasRates)
        const bestPasta = await Recipe.findOne({category:"massas", rate: mostRatedPasta})

        const drinks = await Recipe.find({category:"drink"})
        const drinksRates = drinks.map((drink) => drink.rate )
        const mostRatedDrink = Math.max(...drinksRates)
        const bestDrink = await Recipe.findOne({category:"drink", rate: mostRatedDrink})

        const mainDishes = await Recipe.find({category:"prato principal"})
        const mainDishesRates = mainDishes.map((mainDish) => mainDish.rate )
        const mostRatedMainDish = Math.max(...mainDishesRates)
        const bestMainDish = await Recipe.findOne({category:"prato principal", rate: mostRatedMainDish})

        const accompaniments = await Recipe.find({category:"acompanhamento"})
        const accompanimentsRates = accompaniments.map((accompaniment) => accompaniment.rate )
        const mostRatedAccompaniment = Math.max(...accompanimentsRates)
        const bestAccompaniment = await Recipe.findOne({category:"acompanhamento", rate: mostRatedAccompaniment})

        res.status(200).json([bestDessert, bestPasta, bestDrink, bestMainDish, bestAccompaniment])
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
});

module.exports = router