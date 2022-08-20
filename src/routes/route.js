const express = require('express');
const router = express.Router();

//assignment 19 augest 2022
const newAutorModel = require("../models/newAuthorModel")
const newPublisherModel = require("../models/newPublisherModel")
const newbookModel = require("../models/newBookModel")

const augest19Controller = require("../controllers/allController")

router.post("/newAuthor", augest19Controller.createAuthor)
router.post("/newPublisher", augest19Controller.createPublisher)
router.post("/newBook", augest19Controller.createNewBook)
router.get("/allbooks", augest19Controller.getAllbooks)
router.put("updatedbooks", augest19Controller.bookupdater)


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

module.exports = router;