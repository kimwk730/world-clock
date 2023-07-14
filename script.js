function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDate = newYorkElement.querySelector(".date");
    let newYorkTime = newYorkElement.querySelector(".time");
    let newYorkNow = moment().tz("America/New_York");
    newYorkTime.innerHTML = newYorkNow.format("h:mm:ss A");
    newYorkDate.innerHTML = newYorkNow.format("MMMM D YYYY");
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDate = parisElement.querySelector(".date");
    let parisTime = parisElement.querySelector(".time");
    let parisNow = moment().tz("Europe/Paris");
    parisTime.innerHTML = parisNow.format("h:mm:ss A");
    parisDate.innerHTML = parisNow.format("MMMM D YYYY");
  }
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDate = sydneyElement.querySelector(".date");
    let sydneyTime = sydneyElement.querySelector(".time");
    let sydneyNow = moment().tz("Australia/Sydney");
    sydneyTime.innerHTML = sydneyNow.format("h:mm:ss A");
    sydneyDate.innerHTML = sydneyNow.format("MMMM D YYYY");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` 
    <div class="row city">
        <div class="col-4 city">
          <h2>${cityName}</h2>
          <div class="time">${cityTime.format("h:mm:ss A")}</div>
          <div class="date">${cityTime.format("MMMM D YYYY")}</div>
        </div>
      </div>
      `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
