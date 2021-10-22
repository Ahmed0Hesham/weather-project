// Setup empty JS object to act as endpoint for all routes

// start after go back home
projectData = {};

// what a stupid am I , why i coded this here ?!!! while watching async fitch concept
/*const baseUrl='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
let apiKey = '6088b95948dfb5af9ad835ae7033f1b7';
document.querySelector('#generate').addEventListener('click', getData);
function getData(e){
    WeatherData(baseUrl,apiKey);
}
const weatherData = async (baseUrl,apiKey)=>{
    const bond = await fetch(baseUrl+apiKey)
    try {
        const weather = await bond.json();
        console.log(weather);
}
catch(error) {
        console.log("error", error);
}
}*/
// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app =express();
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;
const server = app.listen(port, listening=> {
    console.log('server runing');
    console.log(`localhost port :${port}`);
});
// just trying arrow funcation
/*function listening () {
    console.log('server runing');
    console.log(`localhost port :${port}`);
}*/
//lets stop here and move from cafe to home and then continue 
app.get('/tempDeg',(req,res)=>{
    res.send(projectData);
})
app.post('/setTempDeg',(req,res)=>{
projectData.feelings=req.body.feelings
projectData.temp=req.body.temp
projectData.date=req.body.date
res.end()
})


