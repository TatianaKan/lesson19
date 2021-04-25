/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
//createElement coздает элемент и возвращает

// indicators.innerHTML='Карусель';
// let slidesCount ='';
// let carousel = document.createElement('div');
// carousel.className = 'carousel';
// document.body.prepend(carousel);

function createCarousel(slidesCount = 5) {
    container = document.querySelector('#carousel');
    
    slides = document.createElement('ul');
    slides.setAttribute('class', 'slides');
    container.appendChild(slides);
console.log(slides);
    for (let i = 0, n = slidesCount; i < n; i++) {
        
        const slides__item = document.createElement('li');
        slides__item.setAttribute('class', 'slides__item');
        slides.appendChild(slides__item);
          
    }
      


}

createCarousel(4);
