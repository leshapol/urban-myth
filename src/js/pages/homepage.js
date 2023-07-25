
// Gallery form select script//
let header = document.querySelectorAll('.form-select__header');
  for (let heade of header) {
    heade.onclick = function() {
    heade.classList.toggle('form-select__header--active');
 }
}
//-----------------------------//