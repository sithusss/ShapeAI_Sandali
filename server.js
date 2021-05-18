const { response } = require("express");
const express = require("express");
const bodyParser= require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
    
});



app.post("/",function(req,res){
    var n1=Number(req.body.num1);
    var n2=Number(req.body.num2);
    var n3=n2/(n1*n1);
    res.send("Your BMI:"+ ""+ n3);
});

app.listen(5000, function(){
    console.log("server has started on port 5000")
});
