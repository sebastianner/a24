let baseUrl = 'https://api.themoviedb.org/3/';
let apiUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&include_adult=yes&include_video=yes&with_companies=41077'
var counter = 0


let getConfig = function () {
    fetch(apiUrl)
    .then(data=>data.json())
    .then(data=>{
        console.log(data)
        data.results.forEach(e => {
            var movie = document.createElement('div')
            movie.setAttribute('id','movie'+counter)
            document.getElementById('feature-container').appendChild(movie)
            var poster = document.createElement('img')
            poster.setAttribute('src','https://image.tmdb.org/t/p/w342'+e.poster_path)
            document.getElementById('movie'+counter).appendChild(poster)
            var title = document.createElement('p')
            title.innerHTML = e.title
            document.getElementById('movie'+counter).appendChild(title)
            counter++
        })
    })
    .catch(err=>alert(err))
}

document.addEventListener('DOMContentLoaded',getConfig)