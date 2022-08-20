const newAuthorModel = require("../models/newAuthorModel")
const newBookModel = require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")
const { get } = require("../routes/route")

//create new Author
const createAuthor = async function(req, res){
    let newAuthor = req.body
    let savedData = await newAuthorModel.create(newAuthor)
    res.send({msg : savedData})
}


//create new publisher
const createPublisher = async function(req, res){
    let newPublisher = req.body
    let savedData = await newPublisherModel.create(newPublisher)
    res.send({msg : savedData})
}

//create new book
const createNewBook = async function(req, res){

    let author = await newAuthorModel.find({}, {"id" : 1})
    let publisher = await newPublisherModel.find({}, {"id" : 1})
    
    let bookdata = req.body
    //get the author id
    let authorid = req.body.author
    //get the publisher id
    let publisherid = req.body.publisher

    if(!authorid && !publisherid){
        res.send({status : false, msg : "author and publisher id are required to creat a book"})
    } else {
        let savedData = await newBookModel.create(bookdata)
    }
    
}

//to get all books 
const getAllbooks = async function(req,res){
    let data = await newBookModel.find().populate('author').populate('publisher')
    res.send({msg : data})
}

//for updating
const bookupdater = async function(req, res){
    let hardCoverbooks = await newBookModel.find({"publisher.name" : { $in: ["Penguin","HarperCollins"]},  $set: { "isHardCover" : true }})

    let authorrating = await newBookModel.find( {"author.rating" : { $gt : 3.5 } } ).updateMany({price : price + 10})
    res.send({msg : hardCoverbooks}, {msg : authorrating})
} 

module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createNewBook = createNewBook
module.exports.getAllbooks = getAllbooks
module.exports.bookupdater = bookupdater