let urlBase = 'https://api.themoviedb.org/3/'
let apiKey = '9660be5ceab38276fc0d0c4771d5c6be'
let searchBar = document.getElementById('search-bar')

function toUpperCase(str) {
    var arr = []
    str.split(' ').forEach(e => {
        arr.push(e.charAt(0).toUpperCase()+e.slice(1))
    })
    return arr.join(' ')
}

function runsearch(movies) {
    console.log(movies)
    searchBar.addEventListener('keyup',(e)=>{
        let searchString = e.target.value
        let filteredMovies = movies.results.filter(m=>{
            return m.title.includes(toUpperCase(searchString))
        })
        console.log(filteredMovies)
    })
}


let getConfig = function () {
    let url = ''.concat(urlBase,'configuration?api_key=',apiKey)
    fetch(url)
    .then(result=>{return result.json()})
    .then((data)=>{
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        console.log('config:', data);
        console.log('config fetched');
        getMovies()
    })
    .catch(err=>console.log(err))
}

let getMovies = function () {
    let url = ''.concat(urlBase,'discover/movie?api_key=',apiKey,'&page=1&with_companies=41077')
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        runsearch(data)
    })
}

getConfig()