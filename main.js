const apiKey = "87e9ca4c7ff84f38a25180119242101";

const apiUrl = "https://api.weatherapi.com/v1/forecast.json?&days=3&q=";

const searchBox = document.querySelector(".location-input");
const searchBtn = document.querySelector(".find-button");
const weIcFi = document.getElementById("we-ic-1");
const weIcSe = document.getElementById("we-ic-2");
const weIcTh = document.getElementById("we-ic-3");
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const firstDay = document.getElementById("day-1");
const secondDay = document.getElementById("day-2");
const thirdDay = document.getElementById("day-3");
const firstDate = document.getElementById("date-1");
const secondDate = document.getElementById("date-2");
const thirdDate = document.getElementById("date-3");

async function chechWeather(city) {
  const response = await fetch(apiUrl + city + `&key=${apiKey}`);
  var data = await response.json();

  console.log(data);

  const dayOne = days[new Date(data.forecast.forecastday[0].date).getDay()];
  const dayTwo = days[new Date(data.forecast.forecastday[1].date).getDay()];
  const dayThre = days[new Date(data.forecast.forecastday[2].date).getDay()];

  const dateOne = new Date(data.forecast.forecastday[0].date).getDate();
  const dateTwo = new Date(data.forecast.forecastday[1].date).getDate();
  const dateThree = new Date(data.forecast.forecastday[2].date).getDate();

  const monOne = months[new Date(data.forecast.forecastday[0].date).getMonth()];
  const monTwo = months[new Date(data.forecast.forecastday[1].date).getMonth()];
  const monThree =
    months[new Date(data.forecast.forecastday[2].date).getMonth()];

  // console.log(months[new Date(data.forecast.forecastday[0].date).getMonth()]);

  document.getElementById("ci-d-1").innerHTML = data.location.name;
  document.getElementById("ci-d-2").innerHTML = data.location.name;
  document.getElementById("ci-d-3").innerHTML = data.location.name;
  document.getElementById("temp-1").innerHTML =
    data.forecast.forecastday[0].day.avgtemp_c + "°c";
  document.getElementById("temp-2").innerHTML =
    data.forecast.forecastday[1].day.avgtemp_c + "°c";
  document.getElementById("temp-3").innerHTML =
    data.forecast.forecastday[2].day.avgtemp_c + "°c";
  document.getElementById("humd-1").innerHTML =
    data.forecast.forecastday[0].day.avghumidity + "%";
  document.getElementById("humd-2").innerHTML =
    data.forecast.forecastday[1].day.avghumidity + "%";
  document.getElementById("humd-3").innerHTML =
    data.forecast.forecastday[2].day.avghumidity + "%";
  document.getElementById("wind-1").innerHTML =
    data.forecast.forecastday[0].day.maxwind_kph + "km/h";
  document.getElementById("wind-2").innerHTML =
    data.forecast.forecastday[1].day.maxwind_kph + "km/h";
  document.getElementById("wind-3").innerHTML =
    data.forecast.forecastday[2].day.maxwind_kph + "km/h";
  firstDay.innerHTML = dayOne;
  secondDay.innerHTML = dayTwo;
  thirdDay.innerHTML = dayThre;
  firstDate.innerHTML = dateOne + " " + monOne;
  secondDate.innerHTML = dateTwo + " " + monTwo;
  thirdDate.innerHTML = dateThree + " " + monThree;

  if (data.forecast.forecastday[0].day.condition.text == "Partly Cloudy") {
    weIcFi.src = "images/images/clouds.png";
  } else if (
    data.forecast.forecastday[0].day.condition.text == "Patchy rain nearby"
  ) {
    weIcFi.src = "images/images/rain.png";
  } else if (data.forecast.forecastday[0].day.condition.text == "Sunny") {
    weIcFi.src = "images/images/clear.png";
  } else if (data.forecast.forecastday[0].day.condition.text == "Overcast") {
    weIcFi.src = "images/images/mist.png";
  }

  if (data.forecast.forecastday[1].day.condition.text == "Partly Cloudy") {
    weIcSe.src = "images/images/clouds.png";
  } else if (
    data.forecast.forecastday[1].day.condition.text == "Patchy rain nearby"
  ) {
    weIcSe.src = "images/images/rain.png";
  } else if (data.forecast.forecastday[1].day.condition.text == "Sunny") {
    weIcSe.src = "images/images/clear.png";
  } else if (data.forecast.forecastday[1].day.condition.text == "Overcast") {
    weIcSe.src = "images/images/mist.png";
  }

  if (data.forecast.forecastday[2].day.condition.text == "Partly Cloudy") {
    weIcTh.src = "images/images/clouds.png";
  } else if (
    data.forecast.forecastday[2].day.condition.text == "Patchy rain nearby"
  ) {
    weIcTh.src = "images/images/rain.png";
  } else if (data.forecast.forecastday[2].day.condition.text == "Sunny") {
    weIcTh.src = "images/images/clear.png";
  } else if (data.forecast.forecastday[2].day.condition.text == "Overcast") {
    weIcTh.src = "images/images/mist.png";
  }
}

searchBtn.addEventListener("click", () => {
  chechWeather(searchBox.value);
});

// async function chechWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);

//     document.querySelector('.city').innerHTML = data.name;
//     document.querySelector('.temperature').innerHTML = data.main.temp + "°c";
//     document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
//     document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

//     if (data.weather[0].main == 'Rain') {
//         weatherICon.src = "images/images/rain.png"
//     }
//     else if (data.weather[0].main == 'Clouds') {
//         weatherICon.src = "images/images/clouds.png"
//     }
//     else if (data.weather[0].main == 'Clear') {
//         weatherICon.src = "images/images/clear.png"
//     }
//     else if (data.weather[0].main == 'Drizzle') {
//         weatherICon.src = "images/images/drizzle.png"
//     }
//     else if (data.weather[0].main == 'Mist') {
//         weatherICon.src = "images/images/mist.png"
//     }
// }

// searchBtn.addEventListener('click', () => {
//     chechWeather(searchBox.value)
// })
