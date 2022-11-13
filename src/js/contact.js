const bars = document.querySelector("header .fa-bars");
const navbar = document.querySelector("header .col:nth-child(2) ul ");

bars.addEventListener("click", () => {
  if (navbar.classList.contains("d-block")) {
    navbar.classList.remove("d-block");
  } else {
    navbar.classList.add("d-block");
  }
});
