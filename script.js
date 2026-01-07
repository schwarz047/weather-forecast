function start() {

    

let date  = document.querySelector(".date");
let user_input = document.querySelector("#cityInput");

let button = document.querySelector("button");
let temp = document.querySelector(".temp");

let description = document.querySelector(".description");

let Humidity = document.querySelector("#humidity");

let wind = document.querySelector("#wind");

let location = document.querySelector(".location");

let weather_icon = document.querySelector(".weather_icon");

button.addEventListener("click" , getWeather);

async function getWeather() {

const loc =`https://geocoding-api.open-meteo.com/v1/search?name=${user_input.value}&count=1&language=en&format=json`;

    let data = await fetch(loc);

    data = await data.json();

    let lat = data.results[0].latitude;

    let long = data.results[0].longitude;

    let city_data_url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`

   

    let city_data = await fetch(city_data_url);



    let city_name = await city_data.json();

    console.dir(city_name);
    location.innerText = `${city_name.city} , ${city_name.locality}`;

    const weather = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&timezone=auto`;

   

     let weather_data = await fetch(weather);

     let weather_info = await weather_data.json();

     console.dir(weather_info);

    temp.innerText = weather_info.current_weather.temperature + " *C";

    wind.innerText = `${weather_info.current_weather.windspeed} kmph`;

   
    let timestamp = weather_info.current_weather.time;


let parts = timestamp.split("T"); 

 date.innerText = parts[0]; 
Humidity.innerText = parts[1];

if(!current_weather.isday) {
    weather_icon.innnerText = 🌙;
} else {
    weather_icon.innerText = ☀️;
}

}


}


start();
