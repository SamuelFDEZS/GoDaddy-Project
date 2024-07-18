// Variables Creation

let tabs = Array.from(document.querySelectorAll('.business__tabs__tab'));
let containers = Array.from(document.querySelectorAll('.business__container'));
let buttons = gsap.utils.toArray('.trust__buttons__button');
let cardsContainer = document.querySelector('.trust__services');
let cardWidth = cardsContainer.querySelector('.trust__services__experience').offsetWidth;
let cardsArray = Array.from(document.querySelectorAll('.trust__services__experience'));
let cardsCount = cardsArray.length;
let totalWidth = cardWidth * cardsCount;
let displacement = cardWidth;
let currentX = 0;
let summary = Array.from(document.querySelectorAll('summary'));

// Logic Implementation for Tabs, Buttons and Summary
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.map(tab => tab.classList.remove('business__tabs__tab--active'));

        containers.map(container => container.classList.remove('business__container--active'));

        tab.classList.add('business__tabs__tab--active');
        containers[index].classList.add('business__container--active');
    });
});




buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 1 && currentX > -totalWidth + cardWidth * 3) {
            currentX -= displacement;
        } else if (index === 0 && currentX < 0) {
            currentX += displacement;
        }

        gsap.to(cardsContainer, {
            duration: 0.5,
            x: currentX,
            ease: 'power4.out',
        });
    });
});


summary.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('open');
    });
})


// Mobile-related Logic

let dropdown = document.querySelector('.header__dropdown');
let nav = document.querySelector('.header__nav');
let body = document.querySelector('body');
let xmark = document.querySelector('.header__nav__xmark');
let filter = document.querySelector('.filter');

dropdown.addEventListener('click', () => {
    nav.classList.toggle('header__nav--visible');
    body.classList.toggle('no-scroll');
    filter.classList.toggle('filter--visible');
});

xmark.addEventListener('click', () => {
    nav.classList.toggle('header__nav--visible');
    body.classList.toggle('no-scroll');
    filter.classList.toggle('filter--visible');
});


window.addEventListener('resize', () => {
    nav.classList.remove('header__nav--visible');
    body.classList.remove('no-scroll');
    filter.classList.remove('filter--visible');
});