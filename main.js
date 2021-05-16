// when the key is pressed
// change the border, box, scale (css changes by adding a class ? 
// Play the sound


// check what we are listenning for : the window in that case 
// listen for a keyup event 
window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    if(!audio) {
        return ;
    }
    // reset the time to 0 to avoid delays in playing 
    audio.currentTime = 0 ;
    audio.play();
    key.classList.add('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
// add an event listener for all the nodes ?
