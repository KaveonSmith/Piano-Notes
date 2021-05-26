// Checks for button press
var n = document.querySelectorAll(".note").length; 
for (var i = 0; i< n; i++){
document.querySelectorAll("button")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    fadeAudio(buttonInnerHTML);
    
});
  
}

// Checks for keyboard press 
function makeSound(key) {
    switch (key) {
        case "c":
            var c_note = new Audio('./sounds/piano-c_C_major.wav');
            c_note.play();
            break;
        case "d":
            var d_note = new Audio('./sounds/piano-d_D_major.wav');
            d_note.play();
            break;

        case "e":
            var e_note = new Audio('./sounds/piano-e_E_major.wav');
            e_note.play();
            break;
        case "f":
            var f_note = new Audio('./sounds/piano-f_F_major.wav');
            f_note.play();
            break;
        case "g":
            var g_note = new Audio('./sounds/piano-g_G_major.wav');
            g_note.play();
            break;
        case "a":
            var a_note = new Audio('./sounds/piano-a_A_major.wav');
            a_note.play();
            break;
        case "b":
            var b_note = new Audio('./sounds/piano-b_B_major.wav');
            b_note.play();
            break;
        default:
            console.log(buttonInnerHTML);
    }
}

// Calls all the functions needed for when the user taps a button on their keyboard
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
    fadeAudio(event.key);

});

// Applies the CSS box shadow
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
 }, 100);

    
}
// Fades audio out 
function fadeAudio(audioId){
    var sound = document.querySelector("." + audioId);

    var fadePoint = sound.duration-2; 
    var soundFade = setInterval(function(){
        if ((sound.currentTime >= fadePoint) && (sound.volume!= 0.0)){
            sound.volume -=0.1; 
        }

        if (sound.volume == 0.0){
            clearInterval(soundFade)
        }
    }, 200);
}