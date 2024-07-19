let mongoose = require('mongoose');
let myUser = require('../model/user')
//mongoose.model('user')
exports.list = async(req,res)=>{
    try {
        // let list = await myUser.find()
        let list  = await myUser.aggregate([
        {$match : {}},
        {$project : {
            "_id" : "$_id",
            "name" : "$name",
            "mobile" : "$mobile"
        }}
        ])
        res.status(200).json({
            message : 'user list',
            code : 200,
            data : list
        })
    } catch (error) {
        console.log('Error')        
    }
}

exports.create = async(req,res)=>{
    try {
        let userD = {
            name : "harish",
            mobile : 38383939
        }
        let abc = await myUser.create(userD);
        res.status(200).json(abc);
    } catch (error) {
        console.log('Internal server error')
    }
}

exports.update = async(req,res)=>{
try {
    let d = await myUser.findByIdAndUpdate({"_id":"6699f7089ea68d7bb0086dfb"},{
        name : "hello",
        mobile : 542312
    })
    res.json(d);
} catch (error) {
    console.log("Error");
    res.json(error)
}
}

exports.remove = async(req,res)=>{
    try {
        let userId = {_id:req.params.id};
        let d = await myUser.deleteOne(userId);
        res.json(d)
    } catch (error) {
        console.log("error",error);
        res.json(error);
    }
}