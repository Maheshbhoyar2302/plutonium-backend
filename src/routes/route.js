const express = require('express');
const abc = require('../introduction/intro')

const welcome = require('../logger/logger')

const dateMonthe = require('../utils/helper')

const validation = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()

    welcome.welcomeFun()

    dateMonthe.currentdate()
    dateMonthe.currentMonth()
    dateMonthe.getBatchInfo()

    validation.maketrim()
    validation.changeToLower()
    validation.changeToUpper()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason