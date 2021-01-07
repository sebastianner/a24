let icon = document.getElementsByClassName('slide')
let featured = document.getElementById('feature-container')
let upcoming = document.getElementById('upcoming-container')
let otherMediaPhone = window.matchMedia("(max-width: 425px)")

otherMediaPhone.addEventListener("change",(e)=>{
    if (e.matches) {
        checkWidth()
    } else {
        checkWidth()
    }
})

function checkWidth() {
    if (screen.width<=425) {
        icon[1].addEventListener('click',()=>featured.scrollLeft+=400)
        icon[0].addEventListener('click',()=>featured.scrollLeft+=-400)
    
        icon[2].addEventListener('click',()=>upcoming.scrollLeft+=-400)
        icon[3].addEventListener('click',()=>upcoming.scrollLeft+=400)
    }else{
        icon[1].addEventListener('click',()=>featured.scrollLeft+=735)
        icon[0].addEventListener('click',()=>featured.scrollLeft+=-735)
    
        icon[2].addEventListener('click',()=>upcoming.scrollLeft+=-735)
        icon[3].addEventListener('click',()=>upcoming.scrollLeft+=735)  
    }
}

checkWidth()



