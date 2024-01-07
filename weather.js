const key = "d2a58c790289c758144dbb63d308bfe2";
const api_url = "https://api.openweathermap.org/data/2.5/weather?q=";


const searchbox = document.querySelector(".input-box");
const search_btn = document.querySelector(".top i");
const image = document.querySelector(".image");

async function weather(city) {
    const response = await fetch(api_url + city + `&appid=${key}` + `&units=metric`);
    var data = await response.json();
    if (response.status == 404) {
        document.querySelector(".info").style.display = "none"
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".Humidity_value").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind_value").innerHTML = data.wind.speed + " km/h";

        if (data.weather[0].main == "Clouds") {
            image.src = "images/cloudy.png";
        }
        else if (data.weather[0].main == "Clear") {
            image.src = "images/sun.png";
        }
        else if (data.weather[0].main == "Rain") {
            image.src = "images/raining.png";
        }
        else if (data.weather[0].main == "Snow") {
            image.src = "images/snow.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            image.src = "images/cloudy-2.png";
        }
        else if (data.weather[0].main == "Mist") {
            image.src = "images/cloudy-2.png";
        }

        document.querySelector(".info").style.display = "block"
        document.querySelector(".error").style.display = "none";
    }
}

search_btn.addEventListener("click", () => {
    weather(searchbox.value);
})


