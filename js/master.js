// Check If Local Storage have color-option Value
let mainColor = localStorage.getItem("color-option");

if (mainColor !== null) {
  // Add Color To css root
  document.documentElement.style.setProperty("--main-color", mainColor);

  document.querySelectorAll(".colors-list li").forEach((e) => {
    e.classList.remove("active");
    if (e.dataset.color === mainColor) {
      e.classList.add("active");
    }
  });
}

// Random Background Option
let backgroundOption = true;

// Variable To Control The BackgroundInterval
let backgroundInterval;

// Toggle Spin Class on Icon
document.querySelector(".toggle-settings .icon").onclick = function () {
  // toggle Class fa-spin
  this.classList.toggle("fa-spin");

  // Toggle Class Show
  document.querySelector(".settings-box").classList.toggle("show");
};

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Remove Active Class From All li's
    colorsLi.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Class Active To The Target li
    e.target.classList.add("active");

    // Set Color On Root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    // Add Color To Local Storage
    localStorage.setItem("color-option", e.target.dataset.color);
  });
});

// Swtich Random Background Option
let randomBackgroundEl = document.querySelectorAll(".random-backgrounds span");

randomBackgroundEl.forEach((span) => {
  // remove Class Active from The spans
  span.addEventListener("click", (e) => {
    randomBackgroundEl.forEach((span) => {
      span.classList.remove("active");
    });
    // Add Class Active To The Target span
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      backgroundOption = true;
      randomizeImgs();
    } else {
      backgroundOption = false;
      clearInterval(backgroundInterval);
    }
  });
});

// Select Landing Page Elements
let images = [
  "images/01.jpeg",
  "images/02.jpeg",
  "images/03.jpeg",
  "images/04.jpeg",
  "images/05.jpeg",
];

let landingPage = document.querySelector(".landing-page");

// Function To Randomize Images
function randomizeImgs() {
  if (backgroundOption) {
    backgroundInterval = setInterval(() => {
      landingPage.style.cssText = `background-image: url("${
        images[random(images)]
      }") !important;`;
    }, 1000);
  }
}

randomizeImgs();

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Move To Video 13
