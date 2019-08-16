const express = require('express')
const router = express.Router()
const Fly = require('../models/fly')


//Getting all
router.get('/', async (req, res) => {
    try {
        const flies = await Fly.find()  //try finding all flies
        res.json(flies)      //if successful send all flies
    } catch (err) {         //catch error
        res.status(500).json({ message: error.message })    //send error with status code 500
    }
})


//Getting one
router.get('/:id', getFly, (req, res) => {
    res.json(res.fly)
})



async function getFly(req, res, next) {
    let fly
    try {
        fly = await Fly.findById(req.params.id)
        if (fly == null) {
            return res.status(404).json({ message: 'Cannot find fly'})
        }
    } catch (err) {
        return res.status(500).json({message : error.message})
    }

    res.fly = fly
    next()
}

module.exports = router