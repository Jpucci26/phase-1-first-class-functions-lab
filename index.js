// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];



const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (fare) {
    return function (value){
        return (value * fare)
    }
}

function fareDoubler(fare){
    return (fare *2)
}

function fareTripler(fare){
    return (fare * 3)
}

function selectDifferentDrivers(drivers, fn){
        return fn(drivers)

     }