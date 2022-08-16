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

// Check if There's Local Storage Random Background Item
let backgroundLocalItem = localStorage.getItem("background_option");

// Check if Random Background Local Storage Not Empty
if (backgroundLocalItem !== null) {
  if (backgroundLocalItem === "true") {
    backgroundOption = true;
  } else {
    backgroundOption = false;
    document.querySelectorAll(".random-backgrounds span").forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelector(".random-backgrounds .no").classList.add("active");
  }
}

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

      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;

      clearInterval(backgroundInterval);

      localStorage.setItem("background_option", false);
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
    }, 10000);
  }
}

randomizeImgs();

function random(arr) {
  return Math.floor(Math.random() * arr.length);
}

// Select Skills Selector

let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;
  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window Scroll Top
  let windowScrollTop = this.pageYOffset;

  let height = skillsOffsetTop + skillsOuterHeight - windowHeight - 450;

  if (windowScrollTop > height) {
    let allSpans = document.querySelectorAll(".skills .skill-progress span");
    allSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// create Pop up with the img

let galleryImgs = document.querySelectorAll(".gallery img");

let arr = [
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "seven",
  "Eight",
  "Nine",
  "Ten",
];

// Add Alternate Text on Images
galleryImgs.forEach((img, i) => {
  img.alt = `Image ${arr[i]}`;

  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");

    // Add Class To Overlay
    overlay.className = "popup-overlay";

    // Append Overlay To Body
    document.body.appendChild(overlay);

    // Create The Popup Box
    let popupBox = document.createElement("div");

    // Add Class To Popup Box
    popupBox.className = "popup-box";

    if (img.alt !== null) {
      // Create Heading
      let imgHeading = document.createElement("h3");

      let imgText = document.createTextNode(img.alt);

      imgHeading.appendChild(imgText);

      popupBox.appendChild(imgHeading);
    }

    // Create The Img
    let popupImg = document.createElement("img");

    // Set Image src
    popupImg.src = img.src;

    // Add Img To Popup Box
    popupBox.appendChild(popupImg);

    // append popup Box to Body
    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    closeButton.className = "close-button";

    let closebuttonText = document.createTextNode("X");

    closeButton.appendChild(closebuttonText);

    popupBox.appendChild(closeButton);
  });
});

// Close Popup

document.addEventListener("click", (e) => {
  if (e.target.className == "close-button") {
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

// Move To Video 24
