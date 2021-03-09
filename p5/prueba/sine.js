
let  x = 300;

var w = window.innerWidth;
var h = window.innerHeight;
var count = 0;
var centro = h/2;
var r = 0;

function setup() {
  createCanvas(w, h);
  frameRate(60);
  rectMode(CENTER);
}

function draw() {

background(123,24, 321);
///////////////////////////////////7
let y = sin(frameCount*0.011) * 300;
x ++;
x %= width;
fill(23,212,43);
circle(count  ,centro+y, 244);
////////////////////////////////

translate(w/2,h/2);
rotate(r);


fill(0,0,0, 199);
rect(0,0 , 200, 200);
count = count + 2;
r = r + PI/180*4;


if (count >= w + 122){
  count = 0;

}

}
