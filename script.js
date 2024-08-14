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

//Animations for the footer

/**
 * Animation for the plus icon to minus icon
 */

let isExpanded = false;
let expandIcon = document.querySelectorAll('.footer__columns__column__expand');

expandIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        // Primero, restablecemos todos los botones y sus iconos a su estado por defecto
        expandIcon.forEach(otherIcon => {
            if (otherIcon !== icon) {
                otherIcon.classList.add('icon-fade');

                setTimeout(() => {
                    otherIcon.classList.replace('fa-minus', 'fa-plus');
                    otherIcon.classList.remove('icon-fade');
                }, 100);

                let otherItems = Array.from(otherIcon.parentNode.querySelectorAll('.footer__columns__column__item'));
                otherItems.forEach(item => {
                    item.classList.remove('footer__columns__column__item--visible');
                });
            }
        });

        // Ahora, alternamos el estado del botón actual
        let iconParent = icon.parentNode;
        let items = Array.from(iconParent.querySelectorAll('.footer__columns__column__item'));
        isExpanded = icon.classList.contains('fa-minus');

        // Cambiamos el icono del botón actual
        icon.classList.add('icon-fade');
        setTimeout(() => {
            if (isExpanded) {
                icon.classList.replace('fa-minus', 'fa-plus');
            } else {
                icon.classList.replace('fa-plus', 'fa-minus');
            }
            icon.classList.remove('icon-fade');
        }, 100);

        // Mostramos u ocultamos los items correspondientes
        items.forEach(item => {
            if (isExpanded) {
                item.classList.remove('footer__columns__column__item--visible');
            } else {
                item.classList.add('footer__columns__column__item--visible');
            }
        });
    });
});


/**
 * Animation for footer element's items
 */