const authorModel = require("../models/authorModel")
const booksModel = require("../models/booksModel")


const createAuthor = async function(req,res){
    let data = req.body
    let authorid = req.body.author_id
    if(!authorid) {
        res.send({status : false, msg: "author id is required"})
    } else {
        let savedData = await authorModel.create(data)
        res.send({msg: savedData})
    }
}

const createBook = async function(req,res){
    let data = req.body
    let authorid = req.body.author_id
    if(!authorid) {
        res.send({status : false, msg: "author id is required"})
    } else {
        let savedData = await booksModel.create(data)
    res.send({msg: savedData})
    }
}

const getAllbooks = async function(req,res){
    let allbooks = await booksModel.find()
    let allbooks1 = await authorModel.find()
    res.send({msg: allbooks})
}

const chetanbooks = async function(req, res){
    let chetanObj = await authorModel.find({"author_name":"Chetan Bhagat"})
    let authorid = await booksModel.find({"author_id": {$eq : chetanObj.author_id}})
    res.send({msg:authorid})
    
    
}

const updateTwoState = async function(req,res){
    let book = await booksModel.findOneAndUpdate(
        {"name":"Two states"}, 
        {$set : {"price":100}}, 
        {$new : true})
    let details = await booksModel.find({"author_id": {$eq : book.price.author_id}}).select({"author_name": 1})
    res.send({msg: details})
}

const rangebook = async function(req,res){
    let range = await booksModel.find({price : {$gte : 50, $lte : 100}})
    let autid = range.map(x=>x.author_id)
    let newrange = await authorModel.find({"author_id": autid}).select({"auther_name":1})
    res.send(newrange)
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.getAllbooks = getAllbooks
module.exports.chetanbooks = chetanbooks
module.exports.updateTwoState = updateTwoState
module.exports.rangebook = rangebook