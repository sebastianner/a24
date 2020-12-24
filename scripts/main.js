let baseUrl = 'https://api.themoviedb.org/3/'
const upcomingContainer = document.getElementById('upcoming-container')
const featureContainer = document.getElementById('feature-container')

let getFeatures = function () {
    let getFeaturesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&include_adult=yes&include_video=yes&with_companies=41077'
    let counter = 0
    fetch(getFeaturesUrl)
    .then(data=>data.json())
    .then(data=>{
        html = data.results
        .map((e)=>{
            counter++
            return `
            <div id="movie${+counter}">
                <img class="featured-poster" id="poster${+counter}" src="${'https://image.tmdb.org/t/p/w342'+e.poster_path}"></img>
                <span class="featured-span hover">hola</span>
            </div>
        `
    })
    .join('');
    featureContainer.innerHTML = html;
    })
    .catch(err=>console.log(err))
}


let getUpcoming = ()=>{
    let getUpcomingUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=true&primary_release_year=2020&year=2020&with_companies=41077'
    let counter = 0
    fetch(getUpcomingUrl)
    .then(data=>data.json())
    .then(data=>{
        html = data.results
        .map((e)=>{
            counter++
            return `
            <div id="upcoming${+counter}">
                <img class="upcoming-poster" src="${'https://image.tmdb.org/t/p/w342'+e.poster_path}"></img>
                <span class="upcoming-span">hola</span>
            </div>
        `
    })
    .join('');
    upcomingContainer.innerHTML = html;
    })
    .catch(err=>console.log(err))
}

document.addEventListener('DOMContentLoaded',getFeatures)
document.addEventListener('DOMContentLoaded',getUpcoming)
