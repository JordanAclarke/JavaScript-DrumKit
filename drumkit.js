window.addEventListener('keydown', function(evt) {
    console.log(evt.keyCode);
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${evt.keyCode}"]`);
    this.console.log(audio);
    if(!audio) return; //Stops the function 
    audio.currentTime = 0;
    audio.play();
    this.console.log(key);
    key.classList.add('playing');
})
// function removeTransition (evt) {
// console.log(evt);
// if(evt.propertyName !== 'transform') return; //skip if it's not a transform
// console.log(evt.propertyName);
// this.classList.remove('playing');
// }
// const keys= document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
