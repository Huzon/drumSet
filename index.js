
var buttons = document.querySelectorAll(".drum");
var previousKey;
var audioSound = new Audio("sounds/crash.mp3");
// document.querySelectorAll(".drum").addEventListener("click",()=>alert("hello"));
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonValue = this.innerHTML;
    
  //  console.log(keyPress);
    sounds(buttonValue);
    animate(buttonValue);
  });
  // switch for key press
}

document.addEventListener("keydown", function (event) {
  console.log("in switch2");
  sounds(event.key);
  animate(event.key);
  
});

function sounds(key){
  switch (key) {
    case "j":
    var drumSound = new Audio("sounds/crash.mp3");
    drumSound.play();
    break;
    case "k":
    var drumSound = new Audio("sounds/kick-bass.mp3");
    drumSound.play();
    break;
    case "l":
    var drumSound = new Audio("sounds/snare.mp3");
    drumSound.play();
    break;
    case "w":
    var drumSound = new Audio("sounds/tom-1.mp3");
    drumSound.play();
    break;
    case "a":
    var drumSound = new Audio("sounds/tom-2.mp3");
    drumSound.play();
    break;
    case "s":
    var drumSound = new Audio("sounds/tom-3.mp3");
    drumSound.play();
    break;
    case "d":
    var drumSound = new Audio("sounds/tom-4.mp3");
    drumSound.play();
    break;
    default:
    console.log(this.innerHTML);
    break;
  }
}

function animate(drumVal){
  // code to leave the key pressed unless another key is pressed
  // if(previousKey!=null)
  //   document.querySelector("."+previousKey).classList.remove("pressed");
  // document.querySelector("."+drumVal).classList.add("pressed");
  // previousKey = drumVal; 
  var drumObj = document.querySelector("."+drumVal);
  drumObj.classList.add("pressed");
  setTimeout(()=>drumObj.classList.remove("pressed"), 200);
}
