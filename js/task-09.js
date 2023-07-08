function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const ColorBtn = document.querySelector('.change-color')
const nameColor = document.querySelector('.color')

function ChngColorBtn() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}

ColorBtn.addEventListener('click', ChngColorBtn);
