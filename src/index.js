function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

// function formarDate(date) {
//   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   let currentHour = [date.getHours()];
//   let currentMinutes = [date.getMinutes()];
//   let currentDay = days[date.getDay()];
//   let hot = `${currentDay} ${currentHour}:${currentMinutes}`;
//   return hot;
// }
// function search(log) {
//   log.preventDefault();
//   let reed = document.querySelector("#search");
//   let jum = document.querySelector("h1");
//   if (reed.value) {
//     jum.innerHTML = `${reed.value}`;
//   } else {
//     jum.innerHTML = null;
//     alert("Please type a city");
//   }
// }
let form = document.querySelector("#city");
form.addEventListener("submit", search);

function getForecast(coordinates) {
  let apiKey = "ff53351ce88e0e7d3c51aed26ec4073d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function displayWeather(response) {
  let cityElement = document.querySelector("#city");
  let ttElement = document.querySelector("#tt");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  
  // celsiusTemperature = response.data.main.temp;

  cityElement.innerHTML = response.data.name;
  ttElement.innerHTML = Math.round(response.data.main.temp);
  humidityElement.innerHTML = response.data.main.humidity;
  descriptionElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute("src",`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);

  getForecast(response.data.coord);
}

function searchCity(city) {
  let apiKey = "ff53351ce88e0e7d3c51aed26ec4073d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

// function displayFahrenheitTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#tt");
//   let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
//   temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
// }

// function displayCelsiusTemperature(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#tt");
//   temperatureElement.innerHTML = Math.round(celsiusTemperature);
// }

// let celsiusTemperature = null;

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

// let celsiusLink = document.querySelector("#celsius-link");
// fahrenheitLink.addEventListener("click", displayCelsiusTemperature);

searchCity("Cherkasy");
