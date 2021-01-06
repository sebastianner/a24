let menu = document.getElementById('menu-button')
let menuText = document.getElementById('menu-text')
let e = document.getElementsByClassName('result-box')

menu.addEventListener('click',()=>{
    if (menuText.style.display === 'none') {
        menuText.style.display = 'flex'
    }else{
        e[1].style.display = 'none'
        menuText.style.display = 'none'
    }
})