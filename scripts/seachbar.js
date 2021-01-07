let urlBase = 'https://api.themoviedb.org/3/'
let apiKey = '9660be5ceab38276fc0d0c4771d5c6be'
let searchBar = document.getElementsByClassName('search-bar')
let resultBox = document.getElementsByClassName('result-box')
let searchBarIcon = document.getElementById('search-bar-label')
let searchBarSecond = document.getElementById('search-bar-second')
let element = 0
let mediaPhone = window.matchMedia("(max-width: 425px)")

searchBarIcon.addEventListener('click',()=>{
    if (resultBox[1].style.display === 'block') {
        resultBox[1].style.display = 'none'
    }else{
        resultBox[1].style.display = 'none'
    }
})


mediaPhone.addEventListener("change",(e)=>{
    if (e.matches) {
        element = 1
    } else {
        element = 0
    }
    getConfig()
})

function releaseDate(e) {
    let splited = e.release_date.split('-')
    return splited[0]
}

function showMovies(filtered) {
    if (filtered.length===0) {
        resultBox[element].style.display='none' 
    }else{
        resultBox[element].style.display='block' 
    }
    if (searchBar[element].value.length<1) {
        resultBox[element].style.display='none' 
    }
        var html = filtered
        .map((e)=>{
            return `
            <div>
                <figure><img src="${'https://image.tmdb.org/t/p/w92'+e.poster_path}"></img></figure>
                <span>
                    <h2>${e.title}</h2>
                    <p>${releaseDate(e)}</p>                
                </span>
            </div>
        `
        })
        .join('')
        resultBox[element].innerHTML = html;
}

function toUpperCase(str) {
    var arr = []
    str.split(' ').forEach(e => {
        arr.push(e.charAt(0).toUpperCase()+e.slice(1))
    })
    return arr.join(' ')
}

function runsearch(movies) {
    searchBar[element].addEventListener('keyup',(e)=>{
        let searchString = e.target.value
        let filteredMovies = movies.results.filter(m=>{
            if (m.title.includes(toUpperCase(searchString))===true) {
                return m.title.includes(toUpperCase(searchString))
            }else{
                return m.title.includes(searchString)
            }
        })
        showMovies(filteredMovies)
    })
}

let getMovies = function () {
    let url = ''.concat(urlBase,'discover/movie?api_key=',apiKey,'&page=1&with_companies=41077')
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
        runsearch(data)
    })
}

let getConfig = function () {
    let url = ''.concat(urlBase,'configuration?api_key=',apiKey)
    fetch(url)
    .then(result=>{return result.json()})
    .then((data)=>{
        baseImageURL = data.images.secure_base_url;
        configData = data.images;
        getMovies()
    })
    .catch(err=>console.log(err))
}

let checkScreenSize = ()=>{
    if (screen.width<=425) {
        element = 1
    } else {
        element = 0
    }
    getConfig()
}

checkScreenSize()