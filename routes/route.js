const express = require('express');
const weatherController = require("../controllers/weatherController");
var router = express.Router();

router.get("/",function(req,res){
  res.sendFile("index.html");
})

router.get("/getReportBasedOnLocation",function(req,res){
  console.log(req.query);
  res.json({location:req.query.location});
})

router.get("/getReportBasedOnLatitude",function(req,res){
  console.log(req.query);
  res.json({location:req.query.latitude+"/"+req.query.longitude});
})

module.exports = router;
