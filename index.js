function updateTime() {
let dallasDateElement = document.querySelector("#Dallas .date");
dallasDateElement.innerHTML =  moment().format("MMMM Do YYYY");

let dallasTimeElement = document.querySelector("#Dallas .time");
let dallasTime = moment().tz("America/Chicago");
dallasTimeElement.innerHTML = dallasTime.format("h:mm:ss [<small>]A[</small>]")


let italyDateElement = document.querySelector("#Italy .date");
italyDateElement.innerHTML =  moment().format("MMMM Do YYYY");

let italyTimeElement = document.querySelector("#Italy .time");
let italyTime = moment().tz("Europe/Paris");
italyTimeElement.innerHTML = italyTime.format("h:mm:ss [<small>]A[</small>]");
}

function updatecity(event) {
let cityTimeZone = event.target.value;
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let citiesElement = document.querySelector("#cities");
citiesElement.innerHTML = `
<div class="city" id="Dallas">
<div>
        <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>
    `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city-select");
citiesSelectElement.addEventListener("change", updatecity);
