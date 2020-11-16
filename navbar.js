var nav = document.getElementById('header')

window.addEventListener('scroll', ()=>{
    const scrolled = window.scrollY
    
    if(scrolled >= 90){
        nav.classList.add('sticky-nav')
    }
    else{
        nav.classList.remove('sticky-nav')
    }
})
