const weatherService = require("../services/weatherService");

async function getDataBasedOnLocation(location){
  return await weatherService.getDataBasedOnLocation(location);
}

module.exports = {
  getDataBasedOnLocation:getDataBasedOnLocation
};
