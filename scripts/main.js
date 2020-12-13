let baseUrl = 'https://api.themoviedb.org/3/';

let getFeatures = function () {
    let getFeaturesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&include_adult=yes&include_video=yes&with_companies=41077'
    let counter = 0
    fetch(getFeaturesUrl)
    .then(data=>data.json())
    .then(data=>{
        data.results.forEach(e => {
            let movie = document.createElement('div')
            movie.setAttribute('id','movie'+counter)
            document.getElementById('feature-container').appendChild(movie)

            let poster = document.createElement('img')
            poster.setAttribute('src','https://image.tmdb.org/t/p/w342'+e.poster_path)
            poster.setAttribute('alt',e.title)
            document.getElementById('movie'+counter).appendChild(poster)
            poster.onerror=function() {movie.style.display = 'none'}
            counter++
        })
        removeErrors()
    })
    .catch(err=>console.log(err))
}


let getUpcoming = ()=>{
    let getUpcomingUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=true&primary_release_year=2020&year=2020&with_companies=41077'
    let counter = 0
    fetch(getUpcomingUrl)
    .then(data=>data.json())
    .then(data=>{
        data.results.forEach(e => {
            let movie = document.createElement('div')
            movie.setAttribute('id','upcoming'+counter)
            document.getElementById('upcoming-container').appendChild(movie)
            let poster = document.createElement('img')
            poster.setAttribute('src','https://image.tmdb.org/t/p/w342'+e.poster_path)
            poster.setAttribute('alt',e.title)
            document.getElementById('upcoming'+counter).appendChild(poster)
            poster.onerror=function() {movie.style.display = 'none'}
            counter++
        });
    })
    .catch(err=>console.log(err))
}

function removeErrors() {
    document.getElementById('movie2').style.display='none'
    document.getElementById('movie13').style.display='none'
    document.getElementById('movie16').style.display='none'
}

document.addEventListener('DOMContentLoaded',getFeatures)
document.addEventListener('DOMContentLoaded',getUpcoming)
