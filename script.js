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

    //for clock
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        const hours = now.getHours();
        const hoursDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }

        setInterval(setDate, 1000);
});

