const request = require("request-promise");
const fs = require("fs");
const {API_KEY} = require("../const");
const {WEATHER_REPORTING_BACKEND} = require("../const");
console.log(WEATHER_REPORTING_BACKEND);
async function getDataBasedOnLocation(location){
  //console.log("service" + location);
  try{
  var data = await request({
    url:WEATHER_REPORTING_BACKEND,
    method:"GET",
    qs:{
      key:API_KEY,
      q:location.location,
      format:"json",
      num_of_days:5
    }
  });
  //console.log(data);
  }catch(e){
    console.log(e);
  }
  return JSON.parse(data);
}

module.exports = {
  getDataBasedOnLocation:getDataBasedOnLocation
};
