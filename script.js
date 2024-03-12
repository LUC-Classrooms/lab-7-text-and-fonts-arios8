/**
 * Lab 7 - Text
 */

function setup() {
  createCanvas(640, 240);
  textFont("Impact");
}

function draw() {
  background(247, 242, 246);
  
if(mouseIsPressed){
  textSize(16);
  text("she loves me not :(", 20, 60);
} else{
  textSize(32);
  text("she loves me...", 20, 60);
}


}
