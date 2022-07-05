let images = [
  "images/01.jpeg",
  "images/02.jpeg",
  "images/03.jpeg",
  "images/04.jpeg",
  "images/05.jpeg",
];

let landingPage = document.querySelector(".landing-page");

setInterval(() => {
  landingPage.style.cssText = `background-image: url("${
    images[random(images)]
  }") !important;`;
}, 10000);

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}
