let menu = document.getElementById('menu-button')
let menuText = document.getElementById('menu-text')
let menuContainer = document.getElementById('menu-container')

menu.addEventListener('click',()=>{
    if (menuContainer.style.display === 'none') {
        menuContainer.style.display = 'flex'
        nav.style.backgroundColor = 'black'
    }else{
        resultBox[1].style.display = 'none'
        menuContainer.style.display = 'none'
        nav.style.backgroundColor = 'transparent'
    }
})