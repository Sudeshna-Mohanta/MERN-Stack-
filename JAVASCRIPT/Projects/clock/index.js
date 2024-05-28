let hour = document.querySelector("#hours");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hours = day.getHours() * 30; // 360 degrees / 12 hours
  let minutes = day.getMinutes() * 6; // 360 degrees / 60 minutes
  let seconds = day.getSeconds() * 6; //360 degrees / 60 seconds

  hour.style.transform = `rotateZ(${hours + minutes / 12}deg)`;
  min.style.transform = `rotateZ(${minutes}deg)`;
  sec.style.transform = `rotateZ(${seconds}deg)`;
});
