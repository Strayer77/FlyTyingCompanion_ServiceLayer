const mongoose = require('mongoose')

//create our fly schema
//this schema matches the model used in our database
//this will allow us to grab information from the DB's Flies collection
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
{ collection: 'Flies'}) //specify which collection

module.exports = mongoose.model('Fly', flySchema)   //exporting to be used in Routes and Server files