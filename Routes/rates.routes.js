const {Router} = require('express');
const Rate = require('../Models/Rates.Models');
const router = Router();

router.post("/rate", async (req, res) => {
    const rate = req.body
    try {
        const newRate = await Rate.create(rate)
        res.status(200).json(newRate)
    } catch (error) {
        res.status(500).json({message: error.message})
        
    }
})

module.exports = router