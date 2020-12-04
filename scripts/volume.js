    var video = document.getElementById('a24-video')
    var btn = document.getElementById('volume')
    btn.addEventListener('click',mute)

    function mute(){
        if(video.muted === true){
            video.muted = false
            btn.removeAttribute('class')
            btn.setAttribute('class','icon-volume-on')
        }
        else{
            video.muted = true
            btn.removeAttribute('class')
            btn.setAttribute('class','icon-volume-mute')
        }
    }