let menuToggle = document.querySelector(".menu-toggle");

let bodyElement = document.querySelector("body");

console.log(menuToggle);

menuToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("menu-open");
});
