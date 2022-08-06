//to get current data
 var currentdate = function currentdate(){
    var datetime = new Date().getDate();
    console.log(`Todays date is : ${datetime}`);
}
//to get current month
var currentMonth = function currentMonth(){
    var datetime = new Date().getMonth();
    console.log(`Current month is : ${datetime + 1}`);
}

//to get batch info
const getBatchInfo = function getBatchInfo(){
    console.log('Batch name - Plutonium');
    console.log('we are in week 3');
    console.log('Topic taught : nodejs');
}




module.exports.currentdate = currentdate;
module.exports.currentMonth = currentMonth;
module.exports.getBatchInfo = getBatchInfo;

