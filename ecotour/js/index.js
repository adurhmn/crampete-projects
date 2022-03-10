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

/////////////////////////////////
/// BANNER LOAD HANDLER (RESPONSIVE BANNER)
/////////////////////////////////
window.addEventListener("load", () => {
  const lazyLoad = document.querySelector(".lazy-load");
  lazyLoad.src = lazyLoad.dataset.src;
  lazyLoad.addEventListener("load", () =>
    lazyLoad.classList.remove("lazy-load")
  );
});
