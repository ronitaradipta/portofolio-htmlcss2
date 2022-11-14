// Smooth Scroll

const smooths = document.querySelectorAll(".navigation li a");

for (const smooth of smooths) {
  smooth.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

// Dropdown Menu Mobile

function dropDown() {
  let btnToggle = document.getElementById("btn-toggle");
  let navigation = document.getElementById("navigation");
  btnToggle.classList.toggle("active");
  navigation.classList.toggle("active");
}

// Scroll top

const scrollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
