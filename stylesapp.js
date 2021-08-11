const logo = document.querySelector('.nav__logo');
const logocontainer = document.querySelector('#logocontainer')


logocontainer.addEventListener('mouseover', () => {
    logo.src = 'imgs/activistlogo2.png';
    logocontainer.style.cursor = 'pointer';
})

logocontainer.addEventListener('mouseout', () => {
    logo.src = 'imgs/activistlogo.png';

})

logocontainer.addEventListener('click', () => {
    location.href = 'index.html'
})

const hamburger = document.querySelector('.hamburger-container');

const overlaynav = document.querySelector('#overlay-nav');
const hamburgermenu = document.querySelector('#hamburger-menu')
const link1 = document.querySelector('#hamburger-link')
const link2 = document.querySelector('#hamburger-link2')
const link3 = document.querySelector('#hamburger-link3')
const link4 = document.querySelector('#hamburger-link4')



hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    if (hamburger.classList.contains('change')){
        overlaynav.classList.add('overlay-nav')
        overlaynav.classList.add('fadein-overlay')
        overlaynav.classList.remove('fadeout-overlay')
        hamburgermenu.classList.add('hamburger-menu')
        hamburgermenu.classList.add('fadein-overlay')
        hamburgermenu.classList.remove('fadeout-overlay')
        hamburgermenu.style.display = ''
        link1.classList.add('hamburger-links')
        link1.classList.add('fadein-overlay')
        link2.classList.add('hamburger-links')
        link2.classList.add('fadein-overlay')
        link3.classList.add('hamburger-links')
        link3.classList.add('fadein-overlay')
        link4.classList.add('hamburger-links')
        link4.classList.add('fadein-overlay')
        link1.classList.remove('fadeout-overlay')
        link2.classList.remove('fadeout-overlay')
        link3.classList.remove('fadeout-overlay')
        link4.classList.remove('fadeout-overlay')
        link1.classList.remove('menudisplay')
        link2.classList.remove('menudisplay')
        link3.classList.remove('menudisplay')
        link4.classList.remove('menudisplay')
        document.body.style.overflow = 'hidden';
        

    } else{
        overlaynav.classList.add('fadeout-overlay')
        overlaynav.classList.remove('overlay-nav')
        overlaynav.classList.remove('fadein-overlay')
        hamburgermenu.classList.remove('hamburger-menu')
        hamburgermenu.classList.remove('fadein-overlay')
        hamburgermenu.classList.add('fadeout-overlay')
        hamburgermenu.style.display = 'none'

        link1.classList.remove('hamburger-links')
        link1.classList.remove('fadein-overlay')
        link2.classList.remove('hamburger-links')
        link2.classList.remove('fadein-overlay')
        link3.classList.remove('hamburger-links')
        link3.classList.remove('fadein-overlay')
        link4.classList.remove('hamburger-links')
        link4.classList.remove('fadein-overlay')
        link1.classList.add('fadeout-overlay')
        link2.classList.add('fadeout-overlay')
        link3.classList.add('fadeout-overlay')
        link4.classList.add('fadeout-overlay')
    
        link1.classList.add('menudisplay')
        link2.classList.add('menudisplay')
        link3.classList.add('menudisplay')
        link4.classList.add('menudisplay')
        document.body.style.overflow = '';

    }
})

link1.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link3.classList.remove('hamburger-links')
    link3.classList.remove('fadein-overlay')
    link4.classList.remove('hamburger-links')
    link4.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')
    link4.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

link2.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link3.classList.remove('hamburger-links')
    link3.classList.remove('fadein-overlay')
    link4.classList.remove('hamburger-links')
    link4.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')
    link4.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

link3.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link3.classList.remove('hamburger-links')
    link3.classList.remove('fadein-overlay')
    link4.classList.remove('hamburger-links')
    link4.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')
    link4.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

link4.addEventListener('click', function(){
    hamburger.classList.toggle('change')
    overlaynav.classList.add('fadeout-overlay')
    overlaynav.classList.remove('overlay-nav')
    overlaynav.classList.remove('fadein-overlay')
    hamburgermenu.classList.remove('hamburger-menu')
    hamburgermenu.classList.remove('fadein-overlay')
    hamburgermenu.classList.add('fadeout-overlay')
    link1.classList.remove('hamburger-links')
    link1.classList.remove('fadein-overlay')
    link2.classList.remove('hamburger-links')
    link2.classList.remove('fadein-overlay')
    link3.classList.remove('hamburger-links')
    link3.classList.remove('fadein-overlay')
    link4.classList.remove('hamburger-links')
    link4.classList.remove('fadein-overlay')
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')
    link4.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})