
const btnBurger = document.querySelector('.header__burger');
const header = document.querySelector('.header');

btnBurger.addEventListener('click', () => {
    header.classList.toggle('active');
    if (header.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'visible';
    }
});
