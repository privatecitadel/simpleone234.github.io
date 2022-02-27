function moveLeft(){
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;
    if(left>=0){
        character.style.left = left + "px";
    }
}
function moveRight(){
    let left = 
    parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100;
    if(left<300){
        character.style.left = left + "px";
    }
}
document.addEventListener("keydown", event => {
    if(event.key==="ArrowLeft"){moveLeft();}
    if(event.key==="ArrowRight"){moveRight();}
});

// document.getElementById("character").style.background = "green";

var block = document.getElementById("block");
var counter = 0;
block.addEventListener("animationiteration", ()=> 
{
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    
    block.style.left = left + "px";
    counter++;
});

setInterval(function(){
    var characterLeft = 
    parseInt(window.getComputedStyle(character).getPropertyValue("Left"));
    var blockLeft =
    parseInt(window.getComputedStyle(block).getPropertyValue("Left"));
    var blocktop =
    parseInt(window.getComputedStyle(block).getPropertyValue("top"));
    if(characterLeft == blockLeft &&
        blocktop<500&&
        blocktop>300){
            alert("Game Over. Score: "+counter);
            block.style.animation = none;
        }
},1);

document.getElementById("left").addEventListener("touchstart", moveLeft);
document.getElementById("right").addEventListener("touchstart", moveRight);