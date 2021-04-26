/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
//createElement coздает элемент и возвращает

// const { logError } = require("gulp-sass");

let pointed = null;
const list = document.querySelector('ul');

function createCarousel(slidesCount = 5) {
  container = document.createElement('div');
  container.setAttribute('id', 'carousel');
  // container.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(container);
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();

  createStyle();
  setList()
  console.log(container);
}

function createSlides(n) {
  slides = document.createElement('ul');
  slides.setAttribute('class', 'slides');
  container.appendChild(slides);



  for (let i = 0; i < n; i++) {
    const slides__item = document.createElement('li');
    const a = document.createElement('a');
    slides__item.setAttribute('class', i === 0 ? ' slides__item active' : ' slides__item ');
    a.setAttribute('href', '#');

    slides.appendChild(slides__item);
    slides__item.appendChild(a);
  }
}

function createIndicators(n) {
  indicators = document.createElement('div');
  indicators.setAttribute('class', 'indicators');
  container.appendChild(indicators);


  for (let i = 0; i < n; i++) {
    const indicator = document.createElement('span');
    indicator.setAttribute('class',
      i === 0 ? 'indicators__item active' : 'indicators__item');
    indicator.dataset.slideTo = `${i}`;

    indicators.appendChild(indicator);
  }
}

function createControls() {
  const iclass = 'fas';
  const contrItem = 'controls__item';

  controls = document.createElement('div');
  controls.setAttribute('class', 'controls');
  container.appendChild(controls);

  for (let i = 0; i < 3; i++) {
    const controls__item = document.createElement('div');
    const icon = document.createElement('i');

    switch (i) {
      case 0:
        controls__item.setAttribute('class', `${contrItem} controls__prev`);
        icon.setAttribute('class', `${iclass} fa-chevron-left`);
        break;
      case 1:
        controls__item.setAttribute('class', `${contrItem} controls__next`);
        icon.setAttribute('class', `${iclass} fa-chevron-right`);
        break;
      case 2:
        controls__item.setAttribute('class', `${contrItem} controls__pause`);
        icon.setAttribute('class', `${iclass} fa-play`);
        break;
    }

    controls.appendChild(controls__item);
    controls__item.appendChild(icon);
  }
}
function createStyle() {
  styleContainer = document.createElement('style');
  let styleCode = `
      .controls,
      .slides {
        position: relative;
      }
      .indicators {
        display: flex;
      }
      .indicators__item {
        display: block;
        width: 40px;
        height: 40px;
        background-color: blue;
        margin: 5px;
       
      }`;
  styleContainer.innerHTML = styleCode;
  container.appendChild(styleContainer)
};

function handler(e) {
  let target = e.target;

  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red';

    if (pointed !== null) pointed.removeAttribute('style');
    // console.log(pointed)
    pointed = target;
  }
}
function setList() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', handler);
}

createCarousel(5);
