// menu open/close

const menuBtn = document.querySelector('.menu-hamburguer');

menuBtn.addEventListener('click', ()=>{
    const sideBarMenu = document.querySelector(".navigation-menu");

    menuBtn.classList.toggle('closeBtn');
    sideBarMenu.classList.toggle('open-menu');

});

//scroll up show/hidden

const scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', ()=>{
    const homePage = document.querySelector('#home');
    scrollTopBtn.classList.toggle('show-scroll', window.scrollY >= homePage.clientHeight);
});

// fullscreen certificate open/close

const certificateBox = document.querySelectorAll('.certificate-box-single');
const fullScreen = document.querySelector('.fullscreen-view');
const closeFullScreenBtn = document.querySelector('.close-fullscreen');

certificateBox.forEach((box,boxIndex) => box.addEventListener('click', ()=>{
    const certificateImg = document.querySelectorAll('.certificate-box-single img');
    const fullscreenImg = document.querySelector('#fullscreen-img');

    //Open fullscreen certificate and hidden body overflow
    fullScreen.classList.add('open-fullscreen');
    document.body.classList.add('overflow-hidden');

    //get image for fullscreen
    const certificateSrc = certificateImg[boxIndex].getAttribute('src');

    fullscreenImg.src = certificateSrc;
}));



closeFullScreenBtn.addEventListener('click', ()=>{

    fullScreen.classList.remove('open-fullscreen');
    document.body.classList.remove('overflow-hidden');
});