function upDateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesCurrentTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML =
    losAngelesCurrentTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Sao Paulo
  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDateElement = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloCurrentTime = moment().tz("America/Sao_Paulo");

  saoPauloDateElement.innerHTML = saoPauloCurrentTime.format("MMMM Do YYYY");
  saoPauloTimeElement.innerHTML = saoPauloCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Fiji
  let fijiElement = document.querySelector("#fiji");
  let fijiDateElement = fijiElement.querySelector(".date");
  let fijiTimeElement = fijiElement.querySelector(".time");
  let fijiCurrentTime = moment().tz("Pacific/Fiji");

  fijiDateElement.innerHTML = fijiCurrentTime.format("MMMM Do YYYY");
  fijiTimeElement.innerHTML = fijiCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
upDateTime();
setInterval(upDateTime, 1000);
