const express = require("express");
const app = express();
const router = require("./routes/route");

app.use("/",router);

app.listen(9090,function(){
  console.log("server rinning at 9090");
})
