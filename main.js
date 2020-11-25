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
            document.getElementById('movie'+counter).appendChild(poster)
            counter++
        })
    })
    .catch(err=>alert(err))
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
            document.getElementById('upcoming'+counter).appendChild(poster)
            poster.onerror=function() {
                movie.remove()
            }
            counter++
        });
    })
    .catch(err=>alert(err))
}

document.addEventListener('DOMContentLoaded',getUpcoming)
document.addEventListener('DOMContentLoaded',getFeatures)