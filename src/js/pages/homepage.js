let pag = document.getElementsByClassName("pag__item");
let image = document.querySelector(".about__image > img");

let imgarr = new Array("card.jpg", "card2.jpg", "card3.jpg"); //        Добавте свои картинки через запятую
function imgsrc(i) {
  image.src = imgarr[i + 1];
  console.log(imgarr[i + 1]);
}

$(".pag__item").on("click", function () {
  let i = $(this).data("num");
  imgsrc(i);
});
