const stop = document.querySelector('.stop');
const buttR = document.querySelector('.buttR');
const buttL = document.querySelector('.buttL');
const car = document.querySelector('.car');
const lightButt = document.querySelector('.lightButt');
const lightImg = document.querySelector('.lightImg');
const bulletButt = document.querySelector('.bulletButt');
const bulletImg = document.querySelector('.bulletImg');
const onLight = document.querySelector('.onLight');
const offLight = document.querySelector('.offLight');
const onShoot = document.querySelector('.onShoot');
const offShoot = document.querySelector('.offShoot');
let str = '';


buttL.addEventListener('click', () => {
  car.style.animation = 'moveL 3s infinite ease-in-out';
});
buttR.addEventListener('click', () => {
  car.style.animation = 'moveR 3s infinite ease-in-out';
});
stop.addEventListener('click', () => {
  car.style.animation = 'null';
});
lightButt.addEventListener('click', () => {
  lightImg.classList.toggle('display');
  onLight.classList.toggle('display');
  offLight.classList.toggle('display');
});
bulletButt.addEventListener('click', () => {
  bulletImg.classList.toggle('display');
  onShoot.classList.toggle('display');
  offShoot.classList.toggle('display');
});
