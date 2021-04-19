// menu open/close

const menuBtn = document.querySelector('.menu-hamburguer')

menuBtn.addEventListener('click', ()=>{
    const sideBarMenu = document.querySelector(".navigation-menu")

    menuBtn.classList.toggle('closeBtn')
    sideBarMenu.classList.toggle('open-menu')

})

//scroll up show/hidden

const scrollTopBtn = document.querySelector('.scroll-top')

window.addEventListener('scroll', ()=>{
    const homePage = document.querySelector('#home')
    scrollTopBtn.classList.toggle('show-scroll', window.scrollY >= homePage.clientHeight)
})