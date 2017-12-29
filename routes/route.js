const express = require('express');
const weatherController = require("../controllers/weatherController");
var router = express.Router();

router.get("/",function(req,res){
  res.send("done");
})

router.get("/getLocations",function(req,res){

})

module.exports = router;
