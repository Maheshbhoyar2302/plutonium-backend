const batchName = 'functionup';

const maketrim = function maketrim(){
    console.log(batchName.trim());
}

const changeToUpper = function changeToUpper(){
    console.log(batchName.toUpperCase());
}

const changeToLower= function changeToLower(){
    console.log(batchName.toLowerCase());
}

module.exports.maketrim = maketrim;
module.exports.changeToLower = changeToLower;
module.exports.changeToUpper = changeToUpper;