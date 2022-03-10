"use strict";

////////////////////////////////////////////
/// TAB
////////////////////////////////////////////
const tabs = document.querySelectorAll(".nav-item--tabs");

// highlights chosen tab in navbar
const changeTab = function (tabName) {
  for (const tab of tabs) {
    tab.classList.remove("nav-item-active--tabs");
  }
  document
    .querySelector(`.nav-item--${tabName}`)
    .classList.add("nav-item-active--tabs");
};

const switchTab = function (tabName) {
  for (const tab of document.querySelectorAll(".tab")) {
    tab.classList.add("hidden");
  }
  document.querySelector(`.tab--${tabName}`).classList.remove("hidden");
};

for (let tab of tabs) {
  tab.addEventListener("click", function () {
    changeTab(tab.dataset.tabName);
    switchTab(tab.dataset.tabName);
  });
}

////////////////////////////////////////////
/// IMAGE SLIDER
////////////////////////////////////////////
const slides = document.querySelectorAll(".slide__img");
let currentSlide = 0;

//slider movement
const moveSlide = function () {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
};
moveSlide();

// arrow implementation
const moveRight = function () {
  if (currentSlide === slides.length - 2) currentSlide = 0;
  //-2 here because slider displays two images at a time. it should be 1 for classic one img sliders
  else currentSlide++;
  moveSlide();
};

const moveLeft = function () {
  if (currentSlide === 0) currentSlide = slides.length - 2;
  //-2 here because slider displays two images at a time. it should be 1 for classic one img sliders
  else currentSlide--;
  moveSlide();
};

document
  .querySelector(".slide__btn--right")
  .addEventListener("click", moveRight);

document.querySelector(".slide__btn--left").addEventListener("click", moveLeft);
