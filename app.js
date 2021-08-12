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

const TypeWriter = function(txtElement, words, wait = 2000){
    this.txtElement  = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
}

TypeWriter.prototype.type = function(){

    const currentIndex = this.wordIndex % this.words.length;
    const fullTxt = this.words[currentIndex];
    if(this.isDeleting){
        this.txt = fullTxt.substring(0, this.txt.length - 1)

    } else{
        this.txt = fullTxt.substring(0, this.txt.length + 1)
    }
    this.txtElement.innerHTML = `<span class = "txt">${this.txt}</span>`

    let typeSpeed = 100;

    if(this.isDeleting){
        typeSpeed /= 2;
    }

    if(!this.isDeleting && this.txt === fullTxt){
        typeSpeed = this.wait;
        this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.wordIndex++;
        typeSpeed = 300;
    }

    setTimeout(() => this.type(), typeSpeed)
}



document.addEventListener('DOMContentLoaded', init);

function init(){
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait')
    new TypeWriter(txtElement, words, wait)
}

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

card1.addEventListener('click', () => {
    window.open("https://www.washingtonpost.com/video-games/2021/08/06/blizzard-culture-sexual-harassment-alcohol/", '_blank').focus();

})

card2.addEventListener('click', () => {
    window.open("https://www.nytimes.com/2020/06/23/style/women-gaming-streaming-harassment-sexism-twitch.html", '_blank').focus();

})

card3.addEventListener('click', () => {
    window.open("https://20-first.com/wp-content/uploads/2020/08/200825-2020-Global-Gaming-Scorecard-Web.pdf", '_blank').focus();

})

const action1 = document.querySelector('#action1');
const action2 = document.querySelector('#action2');
const action3 = document.querySelector('#action3');


action1.addEventListener('click', () => {
    window.open("educate.html");

})

action2.addEventListener('click', () => {
    window.open("awareness.html");

})

action3.addEventListener('click', () => {
    window.open("beinvolved.html");

})

const navButton = document.querySelector(".nav__button");

navButton.addEventListener('click', () => {
    window.open("https://www.unicef.org/gender-equality", '_blank').focus();

})

const hamburger = document.querySelector('.hamburger-container');

const overlaynav = document.querySelector('#overlay-nav');
const hamburgermenu = document.querySelector('#hamburger-menu')
const link1 = document.querySelector('#hamburger-link')
const link2 = document.querySelector('#hamburger-link2')
const link3 = document.querySelector('#hamburger-link3')

const menucontact = document.querySelector('#menucontact')


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
        link1.classList.remove('fadeout-overlay')
        link2.classList.remove('fadeout-overlay')
        link3.classList.remove('fadeout-overlay')
        menucontact.classList.add('menucontact')
        menucontact.classList.add('fadein-overlay')
        menucontact.classList.remove('fadeout-overlay')
        link1.classList.remove('menudisplay')
        link2.classList.remove('menudisplay')
        link3.classList.remove('menudisplay')
        menucontact.classList.remove('menudisplay')
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
        link1.classList.add('fadeout-overlay')
        link2.classList.add('fadeout-overlay')
        link3.classList.add('fadeout-overlay')
        menucontact.classList.remove('menucontact')
        menucontact.classList.remove('fadein-overlay')
        menucontact.classList.add('fadeout-overlay')
        link1.classList.add('menudisplay')
        link2.classList.add('menudisplay')
        link3.classList.add('menudisplay')
        menucontact.classList.add('menudisplay')
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
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')
    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
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
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')

    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
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
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')

    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
    document.body.style.overflow = '';

})

menucontact.addEventListener('click', function(){
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
    link1.classList.add('fadeout-overlay')
    link2.classList.add('fadeout-overlay')
    link3.classList.add('fadeout-overlay')

    menucontact.classList.remove('menucontact')
    menucontact.classList.remove('fadein-overlay')
    menucontact.classList.add('fadeout-overlay')
    document.body.style.overflow = '';
    window.open("https://www.unicef.org/gender-equality", '_blank').focus();

})