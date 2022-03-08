"use strict";

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
