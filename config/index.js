let mongoose = require('mongoose');

try {
    mongoose.connect('mongodb://localhost:27017/test11')
    console.log("Database connected")
} catch (error) {
    console.log("Database not connected")    
}