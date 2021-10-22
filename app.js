/* Global Variables */

//const bodyParser = require("body-parser");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
// applying async fitch concept in lesson 4
/*const baseUrl='http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
const apiKey = '6088b95948dfb5af9ad835ae7033f1b7';
document.querySelector('#generate').addEventListener('click', getData);
function getData(e){
    WeatherData(baseUrl,apiKey);
}
const WeatherData = async (baseUrl,apiKey)=>{
    const bond = await fetch(baseUrl+apiKey)
    try {
        const weather = await bond.json();
        console.log(weather);
    }
    catch(error) {
        console.log("error", error);
    }
}
// am very happy i fitch data from API for the first time
// but why i got data about Moscow !!!!!!!!
// country: "RU"
// id: 524901
// name: "Moscow"
// population: 0
// sunrise: 1634183882
// sunset: 1634221963
// timezone: 10800
const feel = document.querySelector("#feelings").value;*/
//failed
//try again

const key = '6088b95948dfb5af9ad835ae7033f1b7'
document.querySelector('#generate').addEventListener('click',async () => {
    const zip= document.querySelector('#zip').value
    try {
        
    
    const baseUrl=`https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${key}&units=metric`
    const response =await fetch(baseUrl)
    const data =await response.json()
    /*console.log(response);
    console.log(zip);
    console.log(data);*/
    const tempo = data.main.temp
    //console.log(tempo);

const feelings = document.querySelector('#feelings').value
// Damn textarea rows -_-
   // `running on localhost: ${port}`
//course
      await fetch('/setTempDeg', {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },        
      body: JSON.stringify({
          temp:tempo,
          date:newDate,
          feelings:feelings

      }) 
    })
    const tempPoint =await fetch('/TempDeg')
    //const finalTemp= tempPoint.json();
// have to get await cuse of async
    const finalTemp= await tempPoint.json();
    console.log(finalTemp);
    // UI Updating oooooowaaaaw
    
    const updateUI = async () => {
        const request = await fetch('');
        
          const allData = await request.json();
          console.log({allData});
          document.getElementById('feelings').innerHTML = allData[0].feelings;
          document.getElementById('temp').innerHTML = allData[0].temp;
          document.getElementById('date').innerHTML = allData[0].date;}
        
          
} catch (error) {
         console.log(error);
}
})
// course lesson 4 concept updating ui elements
/*document.getElementById('generate').addEventListener('click', performAction);

function performAction(e,tempo,feelings){
  
  .then(
    updateUI()
  )
}

const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].facts;
    document.getElementById('animalFav').innerHTML = allData[0].fav;

  }catch(error){
    console.log("error", error);
  }
}*/