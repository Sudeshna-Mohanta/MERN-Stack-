//on load

// window.addEventListener("load", () => {
//   alert("Hey user welcome");
// });

// to select the element

const body = document.querySelector("body");
const color = document.querySelectorAll(".color");
let heading = document.querySelector(".heading");

// generate random color in hexacode #212121

function randomColorGenerator() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += Math.floor(Math.random() * 16).toString(16);
  }
  return randomColor;
}
console.log(randomColorGenerator());

function colorChange(e) {
  switch (e.target.id) {
    case "pink":
      body.style.background = "pink";
      heading.innerText = "The color pink is as delicate as a cherry blossom!";
      heading.style.color = "#C71585";
      break;
    case "purple":
      body.style.background = "purple";
      heading.innerText =
        "The color purple is as rich and regal as a flourishing lavender field!";
      heading.style.color = "beige";
      break;
    case "blue":
      body.style.background = "skyblue";
      heading.innerText =
        "The color blue painted the sky with dreams, endless and boundless!";
      heading.style.color = "blue";
      break;
    case "green":
      body.style.background = "lightgreen";
      heading.innerText =
        "The color green sparkled like emerald gems in the sunlight!";
      heading.style.color = "#006400";
      break;
    case "random":
      body.style.background = randomColorGenerator();
      heading.style.color = "white";
      heading.innerText =
        "Embrace each sunrise with a smile, your happiness illuminates the world!";

      // if (background === "white") {
      //   heading.style.color = "black";
      // }

      break;
    default:
      body.style.background = "white";
      break;
  }
}

color.forEach((color) => {
  color.addEventListener("click", (e) => colorChange(e));
});
