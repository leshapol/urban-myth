// Gallery form select script//
let header = document.querySelectorAll(".filters__header");
for (let heade of header) {
  heade.onclick = function () {
    heade.classList.toggle("filters__header_active");
  };
}
//-----------------------------//
