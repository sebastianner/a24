var icon = document.getElementsByClassName('slide')
var movies = document.getElementById('feature-container')
var test = 740
console.log(test)

icon[1].addEventListener('click',()=>movies.scrollLeft+=735)

icon[0].addEventListener('click',()=>movies.scrollLeft+=-735)


