    var video = document.getElementById('a24-video')
    var btn = document.getElementById('volume')
    btn.addEventListener('click',mute)

    function mute(){
        if(video.muted === true){
            video.muted = false
            btn.style.backgroundImage = "url(./static/mute.png)"
        }
        else{
            video.muted = true
            btn.style.backgroundImage = "url(./static/volume.png)"
        }
    }