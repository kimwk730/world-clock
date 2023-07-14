function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDate = newYorkElement.querySelector(".date");
  let newYorkTime = newYorkElement.querySelector(".time");
  let newYorkNow = moment().tz("America/New_York");
  newYorkTime.innerHTML = newYorkNow.format("h:mm:ss A");
  newYorkDate.innerHTML = newYorkNow.format("MMMM D YYYY");

  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisNow = moment().tz("Europe/Paris");
  parisTime.innerHTML = parisNow.format("h:mm:ss A");
  parisDate.innerHTML = parisNow.format("MMMM D YYYY");

  let sydneyElement = document.querySelector("#sydney");
  let sydneyDate = sydneyElement.querySelector(".date");
  let sydneyTime = sydneyElement.querySelector(".time");
  let sydneyNow = moment().tz("Australia/Sydney");
  sydneyTime.innerHTML = sydneyNow.format("h:mm:ss A");
  sydneyDate.innerHTML = sydneyNow.format("MMMM D YYYY");
}

updateTime();
setInterval(updateTime, 1000);
