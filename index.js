let theTime = new Date();
let hoursNow = theTime.getHours();
if (hoursNow < 10) {
  hoursNow = `0${hoursNow}`;
}
let minutesNow = theTime.getMinutes();
if (minutesNow < 10) {
  minutesNow = `0${minutesNow}`;
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
let theDay = days[theTime.getDay()];
let today = document.querySelector(".day");
today.innerHTML = `${theDay}`;
let theTimeNow = document.querySelector(".time");
theTimeNow.innerHTML = `${hoursNow}:${minutesNow}`;

function showYourTemperature(response) {
  document.querySelector(".theCity").innerHTML = response.data.name;
  document.querySelector("#tempNow").innerHTML = Math.round(
    response.data.main.temp
  );
}
function search(city) {
  let apiKey = "c187e9144da4f09084f67dc127e66acc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(showYourTemperature);
}
function theNewPlace(event) {
  event.preventDefault();
  let city = document.querySelector("#locationInput").value;
  search(city);
}
let form = document.querySelector("#locationEntered");
form.addEventListener("submit", theNewPlace);

function searchLocation(position) {
  let apiKey = "c187e9144da4f09084f67dc127e66acc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showYourTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentLocation(searchLocation);
}
let currentLocationButton = document.querySelector("#yourPlaceButton");
currentLocationButton.addEventListener("click", getCurrentLocation);

search("Syracuse");
