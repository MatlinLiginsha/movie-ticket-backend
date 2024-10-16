const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    movieName:{
        type : String,
        required : true,
        unique : true,
        index:true
    },
    movieImage: 
    { 
        type: String, 
        required:true
    },
    movieYear : {
        type : String,
        required : true
    },
    movieGenre1 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    movieGenre2 : {
        type : String,
        enum: ['Action', 'Comedy','Drama','SciFi','Horror','Thriller','Romance','Fantasy','Animation','Adventure','Crime', 'Biography'],
        required : true
    },
    imdbRating :{
        type : Number,
        required : true,
        min:0,
        max:10
    },
    movieTicketCost : {
        type : Number,
        required : true,
    },
    seatsAvailable : {
        type : Number,
        required : true,
        min:0,
        max:60
    }
},{
    collection : 'movies'
})

module.exports = mongoose.model('movies', movieSchema);
