var splash = document.getElementById("splash");
var main = document.getElementById("main");

main.style.display = "none";

function splashScreen() {
  splash.style.display = "none";
  main.style.display = "flex";
}
setTimeout(splashScreen, 1500);

var btnNav = document.getElementById("button-nav");

btnNav.addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("active");
});

var btnLogin = document.getElementById("btn-login");

btnLogin.addEventListener("click", function () {
  window.location.href = "screens/login/login.html";
});

var btnSearchCPF = document.getElementsByClassName("btn-saiba-mais");

for (i = 0; i < btnSearchCPF.length; i++) {
  btnSearchCPF[i].addEventListener("click", () => {
    window.location.href = "screens/login/consultarCPF.html";
  });
}
