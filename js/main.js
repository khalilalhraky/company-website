// start rellax
let rellax = new Rellax(".rellax");

let header = document.getElementById("header");
header.style.height = innerHeight + "px";

// hide the arrows
let arrows = document.getElementById("arrows");
document.addEventListener("scroll", () => {
  window.pageYOffset > 200
    ? (arrows.style.opacity = 0)
    : (arrows.style.opacity = 1);
});

// menu
let navIcon1 = document.getElementById("nav-icon1");
let heddinMenu = document.getElementById("hiddenMenu");
navIcon1.addEventListener("click", function() {
  this.classList.toggle("open");
  hiddenMenu.classList.toggle("open");
});

function getBrowserWidth() {
  return innerWidth <= 900 ? 1 : 2;
}

new ElderCarousel(".carousel", {
  items: getBrowserWidth()
});

const filterizr = new Filterizr(".filter-container", { layout: "sameHeight" });

AOS.init();

let controls = document.getElementById("controls").children;

for (let index = 0; index < controls.length; index++) {
  controls[index].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");

    current[0].classList.remove("active");

    this.classList.add("active");
  });
}
