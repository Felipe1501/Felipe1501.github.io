const body = document.querySelector("body"),
searchToggle = document.querySelector(".searchToggle"),
pesquisar = document.querySelector(".pesquisar-botao");

searchToggle.addEventListener("click", () => {
searchToggle.classList.toggle("ativar");
});

var $simpleCarousel = document.querySelector(".js-carousel--simple");
 
new Glider($simpleCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});