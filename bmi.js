const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function(){
    console.log("Server started on port 3000");
});

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname +"/bmicalculator.html");
})

app.post("/bmicalculator", function (req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);
    var bmi = weight/(height * height);

    res.send("The BMI is "+bmi);

})


