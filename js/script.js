const elBox = document.querySelector(".box")
const elFormInput = document.querySelector(".input-value");
const elSelect = document.querySelector(".select");
const elSom = document.querySelector(".summa-input");


elBox.addEventListener('submit', function (evt) {
  evt.preventDefault()

  const elInputValus = elFormInput.value;
  const elSelectValue = elSelect.value;

  const elValueSum = elInputValus * elSelectValue;


  elSom.value = `${elValueSum}`;
})