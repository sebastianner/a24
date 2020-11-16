let test = fetch('https://api.themoviedb.org/3/discover/movie?api_key=9660be5ceab38276fc0d0c4771d5c6be&language=en-US&include_adult=yes&include_video=yes&with_companies=41077')

test
    .then(data=>data.json())
    .then(data=>{
        data.results.forEach(e => {
            var t = document.createElement('p')
            t.innerHTML = e.title
            document.getElementById('features').appendChild(t)
        })
    })