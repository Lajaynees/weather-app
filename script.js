// Variables-updated to match new index/css
var searchButton = $("#submit-button");
var form = $("#form");
var date = (".date");
var timeDateToday = moment().format("dddd, MMMM Do YYYY h:mm a").toString(),
var citiesList = $(".featured-cities");
var forecastDay = $("#forecast-div");
var input = $("#form-input"); 
var searchedCities = [];

// Function for recently searched cities
const generateList = function() {
 
  if (localStorage.getItem("searchedCities")) {
   searchedCities = JSON.parse(localStorage.getItem("searchedCities"));  
    }
    else {
    localStorage.setItem("searchedCities", JSON.stringify(searchedCities));
    }
  };

//  function to make list show
generateList();

var createList = function() {
  citiesList.empty();
  for (i = 0; i < searchedCities.length; i++) {
    citiesList.append(
      `<li class="list-group-item searched-Cities" id="${searchedCities[i]}">${searchedCities[i]}</li>`
    );
  }
};

createList();


//add onclick
// New API add-using Ajax req w/ queryURL
searchButton.on("click", function(event) {
  event.preventDefault();
  var cityName = input[0].value; 
  
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=metric&uvi?&appid=95d304ea9130c998e905d74bc71292d7";
  
    
    $.ajax({
      url: queryURL,
      method: "GET",
      crossDomain: true,
      dataType: 'jsonp'
    })
      // data back from req-
      .then(function(response) {
      var cityWeather = JSON.stringify(response);    

      var iconCode = response.weather[0].icon;
      var iconURL = "https://openweathermap.org/img/w/" + iconCode + ".png";

      //results
      $(".city-name").html(response.name + " Weather Details:");
      $(".date").html(timeDateToday);
      $(".conditions").html("Conditions: " + response.weather[0].main + "<img id='weather-icon' src='" + iconURL + "' alt='Weather icon'>");
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp-C").html("Temperature (°C): " + response.main.temp);
      });

      // get local storate -set up-function used
    var citiesTemp = JSON.parse(localStorage.getItem("searchedCities"));
    citiesTemp.push(cityName);
   
    localStorage.setItem("searchedCities", JSON.stringify(citiesTemp));
   
    generateList();
    createList();

});
