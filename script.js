var apiKey="1084c55f9f5c13f04e61f51385b523c6"
var submitBtn=document.querySelector("#searchbtn")
//var cityName= document.querySelector("#search_bar")
//Submit button
//event listner
//input for information
//fetch using Api and input
//if statements check the data




function getWeather(){
var cityName= document.querySelector("#search_bar").value
var weatherAPI="https://api.openweathermap.org/data/2.5/weather?q="+ cityName+"&appid="+apiKey
fetch (weatherAPI)
.then(function(res){
  return res.json()
})
.then(function(data){
  console.log(data)
  getData(data.coord.lat,data.coord.lon)
//use data to add info to the screen
})
.catch(function(err){
console.log(err)
})
}
function getData(lat,lon){
  fetch("https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&appid={API key}")
}


submitBtn.addEventListener("click",getWeather)
//display the Api info(how to go about display)