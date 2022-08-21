function formarDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let currentHour = [date.getHours()];
  let currentMinutes = [date.getMinutes()];
  let currentDay = days[date.getDay()];
  let hot = `${currentDay} ${currentHour}:${currentMinutes}`;
  return hot;
}
// let time = document.querySelector("#today");
// let cool = new Date();
// time.innerHTML = formarDate(cool);
//
function search(log) {
  log.preventDefault();
  let reed = document.querySelector("#search");
  let jum = document.querySelector("h1");
  if (reed.value) {
    jum.innerHTML = `${reed.value}`;
  } else {
    jum.innerHTML = null;
    alert("Please type a city");
  }
}
let form = document.querySelector("#city");
form.addEventListener("submit", search);

// ////
// function showWeather(response) {
//   document.querySelector("#city").innerHTML = response.data.name;
//   document.querySelector("#humidity").innerHTML = response.data.main.humidity;
//   document.querySelector("#temperature").innerHTML = Math.round(
//     response.data.main.temp
//   );
//   document.querySelector("#wind").innerHTML = Math.round(
//     response.data.wind.speed
//   );
//   document.querySelector("#description").innerHTML =
//     response.data.weather[0].main;
// }
// function searchCity(city) {
//   let apiKey = "ff53351ce88e0e7d3c51aed26ec4073d";
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?=${city}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(showWeather);
// }
// function handleSubmit(logat) {
//   logat.preventDefault();
//   let city = document.querySelector("#search").value;
//   searchCity(city);
// }
// function showLocation(position) {
//   let apiKey = "ff53351ce88e0e7d3c51aed26ec4073d";
//   let latit = position.coords.latitude;
//   let long = position.coords.longitude;
//   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${long}&appid=${apiKey}&units=metric`;
//   axios.get(apiUrl).then(showWeather);

// /////////////////////////////////
// }

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#tt").innerHTML = Math.round(response.data.main.temp);

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
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

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formarDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

searchCity("kyiv");