var icon = document.getElementsByClassName('slide')
var featured = document.getElementById('feature-container')
var upcoming = document.getElementById('upcoming-container')

icon[1].addEventListener('click',()=>featured.scrollLeft+=735)
icon[0].addEventListener('click',()=>featured.scrollLeft+=-735)

icon[2].addEventListener('click',()=>upcoming.scrollLeft+=-735)
icon[3].addEventListener('click',()=>upcoming.scrollLeft+=735)