let nav = document.getElementById('header')
let menuBg = document.getElementsByClassName('menu-container')

window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY
    
    if(scrolled >= 90){
        nav.classList.add('sticky-nav')
        menuBg[0].style.backgroundColor= 'black'
    }
    else{
        nav.classList.remove('sticky-nav')
        menuBg[0].style.backgroundColor = 'transparent'
    }
})
