let tabs = Array.from(document.querySelectorAll('.business__tabs__tab'));

let containers = Array.from(document.querySelectorAll('.business__container'));

tabs.forEach((tab, index) => {
    tab.addEventListener('click',() => {
        tabs.map(tab => tab.classList.remove('business__tabs__tab--active'));

        containers.map(container => container.classList.remove('business__container--active'));

        tab.classList.add('business__tabs__tab--active');
        containers[index].classList.add('business__container--active');
    });
});


let buttons = gsap.utils.toArray('.trust__buttons__button');
let cardsContainer = document.querySelector('.trust__services');
let cardWidth = cardsContainer.querySelector('.trust__services__experience').offsetWidth;
let cardsArray = Array.from(document.querySelectorAll('.trust__services__experience'));
let cardsCount = cardsArray.length;
let totalWidth = cardWidth * cardsCount;
console.log(totalWidth)
let displacement = cardWidth;
let currentX = 0;

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        console.log(currentX)
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
