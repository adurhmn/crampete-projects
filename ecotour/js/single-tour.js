//////////////////////////////////////////////
//INITIALIZATION
//////////////////////////////////////////////
let imgBox = document.querySelector(".slide__img-box");
let imgWidth = document
  .querySelector(".slide__img")
  .getBoundingClientRect()
  .width.toFixed(2); //px
let moveWidth = imgWidth / 2; //px
let totalImages = document.querySelectorAll(".slide__img").length;
let viewPortwidth = window.innerWidth;
let imgBoxWidth = totalImages * imgWidth;
let upperLimit = imgBoxWidth - viewPortwidth;
imgBox.style.right = "0px";

const tabs = document.querySelectorAll(".nav-item--tabs");

//////////////////////////////////////////////
//EVENT LISTENERS
//////////////////////////////////////////////
//SUB-SECTION TABS
// for (let i = 0; i < tabs.length; i++) {
//   document
//     .querySelector(".nav-item--highlights")
//     .addEventListener("click", function () {
//       changeTab("highlights");
//     });
// }
const getTabName = (tab) => tab.getAttribute("id").split("-")[1];

// highlights chosen tab in navbar
const changeTab = function (tabName) {
  for (const tab of tabs) {
    tab.classList.remove("nav-item-active--tabs");
  }
  document
    .querySelector(`.nav-item--${tabName}`)
    .classList.add("nav-item-active--tabs");
};

// displays chosen tab and hides others
const switchTab = function (tabName) {
  for (const tab of document.querySelectorAll(".tab")) {
    tab.classList.add("hide-tab");
  }
  document.querySelector(`.tab--${tabName}`).classList.remove("hide-tab");
};

for (let tab of tabs) {
  tab.addEventListener("click", function () {
    changeTab(getTabName(tab));
    switchTab(getTabName(tab));
  });
}

//SUB-SECTION SLIDE-GALLERY
document
  .querySelector(".slide__btn--left")
  .addEventListener("click", function () {
    let currentRight = Number(imgBox.style.right.split("px")[0]);
    if (currentRight > moveWidth - 50) {
      //extra 50px is margin for error
      imgBox.style.right = `${currentRight - moveWidth}px`;
    }
  });

document
  .querySelector(".slide__btn--right")
  .addEventListener("click", function () {
    let currentRight = Number(imgBox.style.right.split("px")[0]);
    if (currentRight < upperLimit - 100) {
      //extra 100px is margin for error
      imgBox.style.right = `${currentRight + moveWidth}px`;
    }
  });
