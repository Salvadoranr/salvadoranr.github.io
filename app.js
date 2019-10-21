const menu = document.getElementsByClassName('menu')[0];
let options = document.getElementsByClassName('header__span');
menu.addEventListener('click', function () {
    addClass(options.length);
});

for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function () {
        removeSelected(options)
        this.classList.add('selected')
        // visibility(this.innerText);
    })
}
function visibility(selectedElement) {

    switch (selectedElement) {
        case 'Acerca de mí': replaceClass('aboutme');
            break;
        case 'Formación': replaceClass('education')
            break;
        case 'Experiencia':replaceClass('experience')
            break;
        case 'Tecnologías':replaceClass('tecnologies')
            break;
        default:
            break;

    }
}
function replaceClass(section){
    document.querySelector('.show').classList.replace('show','hide');
    document.getElementById(section).classList.replace('hide','show');
}

function removeSelected(array) {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('selected')
    }
}
function addClass(repeat) {
    if (repeat) {
        options[repeat - 1].classList.toggle('header--show');
        repeat--
        setTimeout(() => {
            addClass(repeat)
        }, 500);
    }
}
// logica formulario
const cancelButton = document.getElementById('cancel');
cancelButton.addEventListener('click', function () {
    form.style.display = "none";
    blockDiv.style.display = "none";
});

const form = document.getElementById('form');
const contactMe = document.getElementById('contactme');
const blockDiv = document.getElementsByClassName('block--all')[0];

contactMe.addEventListener('click', function () {

    form.style.display = "block";
    const body = document.body;
    const html = document.documentElement;

    const height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);

    blockDiv.style.display = "block";
    blockDiv.style.height = `${height}px`;
    event.preventDefault();
})
//animacion carrusel
const projects = document.getElementById('projects')
let angle = 0;
projects.addEventListener('click', () => {
    const rotate = document.querySelector('.icon-cards__content');
    angle += 120;
    rotate.style.transform = `translateZ(-30vw) rotateY(${angle}deg)`;
    event.preventDefault();
})
