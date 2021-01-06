var menu = document.getElementById('menu-button')
var menuText = document.getElementById('menu-text')

menu.addEventListener('click',()=>{
    if (menuText.style.display === 'none') {
        menuText.style.display = 'flex'
    }else{
        menuText.style.display = 'none'
    }
})