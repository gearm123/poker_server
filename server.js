//jshint esversion: 8
const express = require('express');
const bodyParser = require ("body-parser");
var currentNumPLayers = 0;
var tSum =0;
var nameList = [];
var sessionCount = 0;
var app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

app.get("/currency",function(req,res){
res.send("Anna is the Queen of Gil (;)");

});

app.post("/currency",function(req,res){
var money = req.body.money;
var numPlayersLocal = req.body.numplay;
var name = req.body.name;
if(!nameList.includes(name)){
  nameList.push(name);
  tSum+=parseInt(money);
}
console.log("num of local is "+numPlayersLocal);
console.log("length of array is  "+nameList.length);
console.log("mae is   "+name);
if(nameList.length<numPlayersLocal){
  console.log("sending zero");
  res.status(200).send("0");
}else{
  console.log("sending sum "+tSum);
res.send(tSum.toString());
sessionCount++;
if(sessionCount === numPlayersLocal)
{
	tSum = 0;
	currentNumPLayers = 0;
	nameList = [];
	sessionCount = 0;
}
}

});
app.listen(process.env.PORT || 3000,function(){

  console.log("anna and gil");

});
