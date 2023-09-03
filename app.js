const apiKey = "8b97fb917972bee7f29ea463d2af0b21";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let result = await response.json();
    
    if(result.status==404){
        document.querySelector(".error").style.display="block";
    }

    document.querySelector('.weather-temp').innerHTML = Math.round(result.main.temp) + "°C";
    document.querySelector(".weather-city").innerHTML = result.name;
    document.querySelector('.humidity').innerHTML = result.main.humidity + "%";
    document.querySelector('.wind').innerHTML = result.wind.speed + "Km/h";

    if (result.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }
    else if (result.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
    }
    else if(result.weather[0].main=="Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    
    else if(result.weather[0].main=="Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(result.weather[0].main=="Rain"){
        weatherIcon.src = "images/rain.png";
    }

}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})



