// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers= function(array){
    return drivers.slice(0,2);
}

const returnLastTwoDrivers= function(array){
    return drivers.slice(-2);

}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(a){
return function(){
    return a*a
}
}
const fareDoubler = function(a){
    return a*2
}
const fareTripler = function(a){
    return a*3
}
function selectDifferentDrivers(arrayOfDrivers,afunction=returnFirstTwoDrivers()){
    return selectingDrivers[0];
 } 
    

 function selectDifferentDrivers(arrayOfDrivers,afunction=returnLastTwoDrivers()){
    return selectingDrivers[1];
 } 
   
   

