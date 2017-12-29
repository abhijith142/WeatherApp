const request = require("request-promise");
const fs = require("fs");
const {API_KEY} = require("../const");
const {WEATHER_REPORTING_BACKEND} = require("../const");
console.log(WEATHER_REPORTING_BACKEND);
async function getDataBasedOnLocation(location){
  console.log(location);
  // var data = await request({
  //   url:WEATHER_REPORTING_BACKEND,
  //   method:"GET",
  //   qs:{
  //     key:API_KEY,
  //     q:location.location,
  //     format:"json",
  //     num_of_days:5
  //   }
  // });
  //console.log(data);
  try{
    var data = JSON.parse(fs.readFileSync("./DummyData/Bangalore.json"));
  }catch(e){
    console.log(e);
  }
  return data;
}

module.exports = {
  getDataBasedOnLocation:getDataBasedOnLocation
};
