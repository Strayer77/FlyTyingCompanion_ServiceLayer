const mongoose = require('mongoose')

//create our fly schema
const flySchema = new mongoose.Schema({
    flyName: String,
    flyCategory: String,
    image_url: String,
    materials: { 
        Hook: String,
        Thread: String,
        Body: String,
        Head: String,
        Abdomen: String,
        Bead: String,
        Eyes: String,
        Overwing: String,
        Tail: String,
        Wing: String,
        Hackle: String,
        Back: String,
        Rib: String,
        Thorax: String,
        Tag: String,
        Legs: String,
        Wingcase: String
    }
},
{ collection: 'Flies'})

module.exports = mongoose.model('Fly', flySchema)