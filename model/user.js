let mongoose = require('mongoose');

let schema = mongoose.Schema({
    name : {
        type : String
    },
    mobile : {
        type : Number        
    }
})

module.exports = mongoose.model('user',schema,'user');