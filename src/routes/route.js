const express = require('express');
const abc = require('../introduction/intro')

const loadash = require('lodash')


const welcome = require('../logger/logger')

const dateMonthe = require('../utils/helper')

const validation = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    // console.log('My batch is', abc.name)
    // abc.printName()

    // welcome.welcomeFun()

    // dateMonthe.currentdate()
    // dateMonthe.currentMonth()
    // dateMonthe.getBatchInfo()

    // validation.maketrim()
    // validation.changeToLower()
    // validation.changeToUpper()

    //problem 4
    const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July',       'August', 'September', 'October', 'November', 'December'];
    console.log(loadash.chunk(monthArr, 3))

    const oddArr = [1,3,5,7,9,11,13,15,17,19];
    console.log(loadash.tail(oddArr))

    const duplicateValues = [44,33,55,77,33]
    console.log(loadash.union(duplicateValues))

    const pairFormation = [ ["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]];
    console.log(loadash.fromPairs(pairFormation))


    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason