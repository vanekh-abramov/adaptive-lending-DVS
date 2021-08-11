const burger = document.querySelector('.burger')
const header = document.querySelector('.header_title')
const nav = document.querySelector('.header_nav')
const link = document.querySelector('.header_nav-link')

burger.addEventListener('click', ()=> {
    burger.classList.toggle('burger_active')
    if(burger.classList.contains('burger_active')){
        header.classList.add('header_title-active')
        nav.classList.add('header_nav-active')
        link.classList.add('header_nav-link--active')
    }else if (burger.classList.contains('burger_active') === false) {
        header.classList.remove('header_title-active')
        nav.classList.remove('header_nav-active')
        link.classList.remove('header_nav-link--active')
    }
})
