// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) =>  drivers.slice(0,2);
const returnLastTwoDrivers = (drivers) =>  drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return (fare) => {return integer * fare}
}

const fareDoubler = (fare) =>  createFareMultiplier(2)(fare);
const fareTripler = (fare) =>  createFareMultiplier(3)(fare);

function selectDifferentDrivers(drivers, selectFunc) {
  return selectFunc(drivers)
}