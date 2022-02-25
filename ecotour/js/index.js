/////////////////////////////////
/// HEADER NAV FUNCIONALITY
/////////////////////////////////

// OPEN & CLOSE IMPLEMENTATION
document
  .querySelector(".header__nav-btn")
  .addEventListener("click", function () {
    document.querySelector(".nav--main").classList.remove("hidden");
  });
document
  .querySelector(".nav-close-btn--main")
  .addEventListener("click", function () {
    document.querySelector(".nav--main").classList.add("hidden");
  });

// GO TO PAGE IMPLEMENTATION
const navItems = document.querySelectorAll(".nav-item--main");

for (let item of navItems) {
  item.addEventListener("click", function () {
    location.replace(item.getAttribute("data-page") + ".html");
  });
}

// const goToPage = (pageName) => {
//   console.log(pageName);
// };

// document
//   .querySelector(".nav-item--home")
//   .addEventListener("click", function () {
//     location.replace("index" + ".html");
//   });
// document
//   .querySelector(".nav-item--destination")
//   .addEventListener("click", function () {
//     location.replace("destination" + ".html");
//   });
// document
//   .querySelector(".nav-item--private-tour")
//   .addEventListener("click", function () {
//     location.replace("private-tour" + ".html");
//   });
// document
//   .querySelector(".nav-item--single-tour")
//   .addEventListener("click", function () {
//     goToPage("single-tour");
//   });
// document
//   .querySelector(".nav-item--tour-list")
//   .addEventListener("click", function () {
//     goToPage("tour-list");
//   });
