const countValue = document.querySelector("#value");
countValue.textContent = 0;
const decBtn = document.querySelector(
   '[data-action="decrement"]');
const incBtn = document.querySelector(
   '[data-action="increment"]');

const clickIncr = () => {
   let str = countValue.textContent;
   let num = Number(str);
   num ++;
   countValue.textContent = String(num);
};

incBtn.addEventListener('click', clickIncr);

const clickDecr = () => {
   let str = countValue.textContent;
   let num = Number(str);
   num --;
   countValue.textContent = String(num);
};

decBtn.addEventListener('click', clickDecr);