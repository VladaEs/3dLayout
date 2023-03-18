//3d scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [];
window.onscroll = () => {
    let top = document.documentElement.scrollTop,
        delta = lastPos - top;

    lastPos = top;
    frames.forEach((elem, index) => {
        zVals.push((index * zSpacing) + zSpacing);
        zVals[index] += delta * -5;
        let frame = frames[index],
            transform = `translateZ(${zVals[index]}px)`;
        opacity = zVals[index] < Math.abs(zSpacing) ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    })
       
}

window.scrollTo(0, 1);

//audio 

let imageAudio = document.querySelector('.soundbtn');
let audio = document.querySelector('.audio');


imageAudio.addEventListener('click', () => {
    imageAudio.classList.toggle('paused');

    if (imageAudio.classList.contains('paused')) {
        audio.pause();
    }
    else {
        audio.play();
    }
});

window.onfocus = () => {
    if (imageAudio.classList.contains('paused')) {
        audio.pause();
    }
    else {
        audio.play();
    }

    /*imageAudio.classList.contains('paused') ? audio.pause() : audio.play()*/
}

window.onblur = () => {
    audio.pause();
  
}

