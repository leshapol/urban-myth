// Gallery form select script//
let header = document.querySelectorAll(".form-select__header");
for (let heade of header) {
  heade.onclick = function () {
    heade.classList.toggle("form-select__header--active");
  };
}
//-----------------------------//
// let x = 0;
// const slider = document.querySelector('.slider__list')
// slider.addEventListener('wheel', function(event) {

//   x += event.deltaY;
//   slider.style.transform = 'translateX(' + x +'px'+ ')';
//   console.log(x);

// })

var lastX = 0; //последняя координата x мыши
var SliderScroll = false; //требуется ли анимация?

$(document).mousemove(function (e) {
  lastX = e.clientX; //обновили горизонтальное положение курсора
});

// как только курсор оказывается в элементе news-slider начинаем анимацию прокрутки

$(".slider__list").mouseenter(function (e) {
  SliderScroll = true;

  NewsSliderScroll(); //запуск самой анимации
});

$(".slider__list").mouseleave(function (e) {
  SliderScroll = false; //сбрасываем для выхода из рекурсии
});

function NewsSliderScroll() {
  setTimeout(function () {
    var speed = (0.5 - ($(window).width() - lastX) / $(window).width()).toFixed(
      2
    );
    var step = $(".slider__list").scrollLeft() + 50 * speed;
    $(".slider__list").scrollLeft(step);
    if (SliderScroll) NewsSliderScroll();
  }, 20);
}
