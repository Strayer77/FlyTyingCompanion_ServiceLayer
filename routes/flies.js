const express = require('express')
const router = express.Router()
const Fly = require('../models/fly')


//ROUTES--------------------------------------------------------------------------------------
//Getting all Flies within the Flies Collection 
router.get('/', async (req, res) => {
    try {
        const flies = await Fly.find()  //try finding all flies
        res.json(flies)      //if successful send all flies
    } catch (err) {         //catch error
        res.status(500).json({ message: error.message })    //send error with status code 500
    }
})



//---------------------------------------------------------------------------------------------
//Getting one fly based on its ID
router.get('/:id', getFly, (req, res) => {
    res.json(res.fly)
})



//---------------------------------------------------------------------------------------------
// function used to grab a fly's ID, to be used in the GET Request above
async function getFly(req, res, next) {
    let fly
    try {
        fly = await Fly.findById(req.params.id)     //grabs the fly by ID designated by MongoDB
        if (fly == null) {
            return res.status(404).json({ message: 'Cannot find fly'})  //returns error if no fly found
        }
    } catch (err) {
        return res.status(500).json({message : error.message})  //catch error
    }

    res.fly = fly
    next()
}

module.exports = router