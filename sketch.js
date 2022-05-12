var fundo 
var player,playerimg
function preload(){
  
fundo=loadImage("background.png")
playerimg=loadImage("velho.png")


}

function setup() {
	createCanvas(windowWidth , windowHeight);
    player=createSprite(200,435,20,20)
    player.addImage(playerimg)
    player.scale= 0.5
	//Crie os Corpos aqui.



  
}


function draw() {
background("black");
  image(fundo,0,0,3492,1080)
  
 
 
  drawSprites();
 
}



