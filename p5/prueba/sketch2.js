var w = window.innerWidth;
var h = window.innerHeight;

let move = 50;
let static = 20;

function setup() {
  createCanvas(w, h);


}
text = 0;
function draw() {
  background(89, 4, 78);





  fill(23,23,53);
  ellipse(234,432,static, static);
  ellipse(mouseX, mouseY, move, move);

  if (mouseIsPressed){
    static = floor(random(5, 20));
  }
}
