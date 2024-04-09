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