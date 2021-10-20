var apiKey = "1084c55f9f5c13f04e61f51385b523c6"
var submitBtn = document.querySelector("#searchbtn")
var cityName = document.querySelector("name_of_city");
var buttonEl = document.querySelector(".btn");
var fiveDayForecast = document.querySelector("five-day-div");
var formEl = document.querySelector("#form");
var currentTemp = document.querySelector("today_temp");
var currentHumidity = document.querySelector("today_humidity");
var currentWindSpeed = document.querySelector("today_wind_speed");
var cities = [];

function savedCities(cityName){

console.log(cityName)


var saved = JSON.parse(localStorage.getItem("saved")) || [];
if (localStorage.getItem("saved")) {
  saved = JSON.parse(localStorage.getItem("saved"));
}
if (!saved.includes(cityName)) {
  saved.push(cityName);
  localStorage.setItem("saved", JSON.stringify(saved));
}
}
function displaySavedCities(){
  var saved = JSON.parse(localStorage.getItem("saved")) || [];
for(let i = 0; i < saved.length; i++){
 let city = saved[i]
let container = document.getElementById("searched_cities_container")
let cityEl =document.createElement("button")
cityEl.textContent = city
container.appendChild(cityEl)
}


}
displaySavedCities()

// display weather
  function getWeather() {
    var cityName = document.querySelector("#search_bar").value
    var weatherAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    
    //fetch using Api and input
    fetch(weatherAPI)
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        console.log(data)
        getData(data.coord.lat, data.coord.lon, data.name)
        //use data to add info to the screen



      })
      .catch(function (err) {
        console.log(err)
      })
  }

  // display data
  function getData(lat, lon, name) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`)
    .then(function (res) {
      return res.json()
    })
    .then(function (data) {
      console.log(data)
      savedCities(name);
      
      var tempEl = document.getElementById("today_temp")
tempEl.textContent = "Temperature: " + data.current.temp + "*F"

var tempEl = document.getElementById("today_humidity")
humidEl.textContent = "Humidity: " + data.current.humid + "%"

var tempEl = document.getElementById("today_wind_speed")
windEl.textContent = "Wind Speed: " + data.wind.speed + " MPH"

var tempEl = document.getElementById("today_UV")
uvEL.textContent = "UV Index: "








// Loop for 5 day forecast
    })
    .catch(function (err) {
      console.log(err)
    })
  }

  //event listner
  submitBtn.addEventListener("click", getWeather)
  cityEl.addEventListener("click",function(){
    // console.log("hello")
    })
