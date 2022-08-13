const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { toArray } = require('underscore');

const router = express.Router();

// const movies = ['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
// const objectFilms = [{
//     "id": 1,
//     "name": "The Shining"
//    },
//    {
//     "id": 2,
//     "name": "Incendies"
//    },
//    {
//     "id": 3,
//     "name": "Rang de Basanti"
//    },
//    {
//     "id": 4,
//     "name": "Finding Nemo"
//    }
//    ]
// //problem 1
// router.get('/movies', function(request, response) {
//     console.log(movies)
// })

// // //problem 2 and 3
// router.get('/movies/:indexNumber', function(request, response) {
//     if(request.params.indexNumber < 0 || request.params.indexNumber > movies.length){
//         return console.log("Please enter the valid id");
//     } else {
//         return console.log(movies[request.params.indexNumber])
//     } 
// })

// // //problem 4
// router.get('/films', function(request, response){
//     console.log(objectFilms)
// })

// //problem 5
// router.get('/films/:filmId', function(request, response){
//     if(request.params.filmId < 0 || request.params.filmId  > objectFilms.length){
//                 return console.log("No movie exists with this id");
//     } else {
//                 return console.log(objectFilms[request.params.filmId])
//     } 
// })
// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })

//assignment date : 9 augest 2022
// router.get('/sol1', function(req, res){
//     const myArr = [1,2,3,5,6,7];
//     let lastNumber = myArr.length + 1;
//     let totalSum = lastNumber * (lastNumber + 1) / 2;
//     let arrSum = 0;
//     for(let element = 0; element < myArr.length; element++){
//         arrSum += myArr[element];
//     }
    
//     let missingNumber = totalSum - arrSum;
//     console.log(missingNumber);
// })

//assignment date : 9 augest 2022
// router.get('/sol2', function(req, res){
//     const myCustomArr = [33, 34, 35, 37, 38];
//     let start = myCustomArr[0];
//     let end = myCustomArr[myCustomArr.length - 1];


//     let totalSum = (myCustomArr.length + 1) * (start + end ) / 2;
//     let arrSum = 0;
//     for(let element = 0; element < myCustomArr.length; element++){
//         arrSum += myCustomArr[element];
//     }
//     let missingNumber = totalSum - arrSum;
//     console.log(missingNumber);

// })
// assignment date : 10 augest 2020
// let playersList = [];

// router.post('/players', function(req, res){
//     let newPlayer = req.body
//     let newPlayerAdd = newPlayer.name
//     let newPlayerRepeat = false

//     for(let i = 0; i < playersList.length; i++){
//         if(playersList[i].name === newPlayerAdd){
//             newPlayerRepeat = true;
//             break;
//         } 
//     }
//     if(newPlayerRepeat){
//         res.send("this player already exists");
//     } else {
//         playersList.push(newPlayer);
//         res.send(playersList);
//     }


// })

//assignment : 11 augest
let person = [
    {
      name : "PK",
      age : 10,
      votingStatus : false  
    },
    {
        name : "SK",
        age : 20,
        votingStatus : false  
      },
      {
        name : "AA",
        age : 70,
        votingStatus : false  
      },
      {
        name : "SC",
        age : 5,
        votingStatus : false  
      },
      {
        name : "HO",
        age : 40,
        votingStatus : false  
      }
]
router.post('/votingAge', function(req, res){
    let votingAge = req.query
    for(let i = 0; i < person.length; i++){
        if(person[i].age >= votingAge){
            return person[i].votingStatus = true
        }
        
    }
}
)

module.exports = router;
// adding this comment for no reason