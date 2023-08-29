const apiKey="8b97fb917972bee7f29ea463d2af0b21";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    let result=response.json();
    console.log(result);
     document.querySelector(".weather-temp").innerHTML=result.main.temp;
    document.querySelector(".weather-city").innerHTML=result.name;
    document.querySelector(".humidity").innerHTML=result.main.humidity;
    document.querySelector(".wind").innerHTML=result.wind.speed;
}
 
checkWeather()