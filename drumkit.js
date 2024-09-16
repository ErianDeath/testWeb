document.addEventListener('DOMContentLoaded', function() {

    function playSound(e) {
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);
        const key = document.querySelector(`.key[data-key="${e.code}"]`);

        if (!audio) return; // stop the function from running all together
        audio.currentTime = 0; // rewind to the start of the audio
        audio.play();
        key.classList.add('playing');
    }

    function showKey(e) {
        const p = document.querySelector('p');
        p.textContent = `You are pressing: ${e.code}`; // log the key code to the p element
    }

    function removeTransition(e) {
        console.log(e);
        if (e.propertyName !== 'transform') return; // skip it if it's not a transform
        this.classList.remove('playing');
    }

    window.addEventListener('keydown', function(e) {
        playSound(e);
        showKey(e);
    });
    
    const keys = document.querySelectorAll('.key');
    
    keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // listen for the end of the transition
});

