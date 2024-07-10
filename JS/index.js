function upDateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML =
      losAngelesCurrentTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Sao Paulo
  let saoPauloElement = document.querySelector("#sao-paulo");
  if (saoPauloElement) {
    let saoPauloDateElement = saoPauloElement.querySelector(".date");
    let saoPauloTimeElement = saoPauloElement.querySelector(".time");
    let saoPauloCurrentTime = moment().tz("America/Sao_Paulo");

    saoPauloDateElement.innerHTML = saoPauloCurrentTime.format("MMMM Do YYYY");
    saoPauloTimeElement.innerHTML = saoPauloCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Fiji
  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiCurrentTime = moment().tz("Pacific/Fiji");

    fijiDateElement.innerHTML = fijiCurrentTime.format("MMMM Do YYYY");
    fijiTimeElement.innerHTML = fijiCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

upDateTime();
setInterval(upDateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html">See all cities</a>
  `;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
