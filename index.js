const express = require("express");
const fs = require('fs');
const https = require('https');
const app = express();
const router = require("./routes/route");

var sslOptions = {
  key: fs.readFileSync('Certs/key.pem'),
  cert: fs.readFileSync('Certs/cert.pem'),
  passphrase:"password"
};

app.use(express.static(__dirname + "/public"));

app.use("/",router);

app.listen(process.env.PORT || 9090,function(){
  console.log("server running at 9090");
})
https.createServer(sslOptions, app).listen(process.env.PORT || 9091)
