window.addEventListener('keydown', function(evt) {
    console.log(evt.keyCode);
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`)
    this.console.log(audio);
    if(!audio) return; //Stops the function 
    audio.play();
})