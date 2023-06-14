const express = require("express");
const bodyParser= require("body-parser");

const https = require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));



app.get("/", function(req,res){

    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
    const query= req.body.cityName;

    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&units=metric&appid=ba9a44e4a82ec67d60878a11669cf9a5";
    
    https.get(url,function (response) {
    
        response.on("data",function(data){
            const weatherData=JSON.parse(data);
            const weatherDescription=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const imageURL= "https://openweathermap.org/img/wn/"+ icon +"@2x.png"

            res.write("<p>Description: "+ weatherDescription+"</p>");
            res.write(`<h1>The current temperature in ${query} is ${weatherData.main.temp} degrees</h1>`);
            res.write("<img src="+ imageURL+">");
           
            res.send();
        })
      })
})


app.listen(3001,function(){
    console.log("server:3001 is running");
});