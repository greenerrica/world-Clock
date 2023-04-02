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

updateTime();
setInterval(updateTime, 1000);