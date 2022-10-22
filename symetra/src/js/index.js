let buttonToggleMode = document.querySelector("#symetra-logo");
7;

buttonToggleMode.addEventListener("click", () => {
  let page = document.querySelector("body");
  page.classList.toggle("dark");
})


let buttonToggleMenu = document.querySelector(".icon-menu");

buttonToggleMenu.addEventListener("click", () => {
  let nav = document.querySelector(".menu");
  buttonToggleMenu.classList.toggle("active-icon");
  nav.classList.toggle("active");
});
