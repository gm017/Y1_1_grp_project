/*
Year 0ne, group Project
 Video Synthesizer

 Intrstructions for use

 load up the processing pde
 QWERTY keyboard
 a: show an ellipse
 s: show a square
 j: make shape move randomly along the X axis
 k: make shape move randomly along the Y axis
 ;: make shape larger
 z: randomly change the colour of the background
 x: randomly change the colour of the shape





 /////// funcionallity to add.
 // oscillation of objects
 // add quad with movable points
 //quad added but points need to move???????

 //maybe move into OF or Cinder



 //possible problems to address

 // when key released, objects dissapear.
 // miltiple keypresses affect the above.

 */



let drawEllipse = false;
let drawRectangle = false;
let drawQuad = false;
let rndBackground = false;

let sz = 100;

let x;
let y;
let qx1, qy1, qx2, qy2, qx3, qy3, qx4, qy4; // quad points
let r, g, b;
let amt1 = 0.0; //noise1 movement
let amt2  = 0.0; // noise 2 movement
let sinAmt = 0.0; // sin movement




function setup() {
  createCanvas(800, 800);
  smooth();
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();


}

function draw() {
  //fill background
  background(0);

  //random quad variables
  qx1 = random(0, width);
  qy1 = random(0, height);
  qx2 = random(0, width);
  qy2 = random(0, height);
  qx3 = random(0, width);
  qy3 = random(0, height);
  qx4 = random(0, width);
  qy4 = random(0, height);

  x = noise(amt1);
  y = noise(amt2);

  let sinX = sin(sinAmt);

  //////////////////////////////////////
  if (rndBackground == true) {
    background(random(255), random(255), random(255));
  }

  //draw ellipse
  if (drawEllipse == true) {
    fill(r, g, b);
    ellipse(400*x , 400*y, sz, sz);
  }

  // make the ellipse larger by pressing l
  if ((key === ';') || (key == ':')) {
    sz = sz+ 1;
  }

  //draw rectangle
  if (drawRectangle === true) {
    fill(r, g, b);
    rect(400 * x, 400 * y, sz, sz);
  }

  //draw quad
  if (drawQuad === true){
    fill(r, g, b);
    //quad(x1,       y1,      x2,            y2,     x3,       y3,     x4,      y4)
    quad(qx1 * x , qy1 * y, qx2 * (x + y), qy2 * y, qx3 * x, qy3 * y, qx4 * x, qy4 * y);
  }

  //fill shapes
  if ((key == 'x') || (key == 'X')) {
    r = noise(255);
    g = random(255);
    b = random(255);
  }

  //sinX = sinX + 0.5;
} // end of draw




// functions
function keyPressed() {
  //Q resets size
  if ((key === 'q') || (key === 'Q')) {
    sz = 100;
  }
  if ((key == 'a') || (key == 'A') ) {
    drawEllipse = true;
  }
  if ((key == 'S') || (key == 's')) {
    drawRectangle = true;
  }
  if((key == 'D') || (key == 'd')){
    drawQuad = true;
  }
  if ((key == 'z') ||(key == 'Z')) {
    rndBackground = true;
  }
  //noise move keys
  // j = X axis



  if ((key == 'j') || (key == 'J')) {
    amt1 = amt1 + 0.01;
  }
  //k = Y axis
  if ((key == 'k') || (key == 'K')) {
    amt2 = amt2 + 0.01;
  }
  //////////////////////
}


function keyReleased() {
  drawEllipse = false;
  drawRectangle = false;
  drawQuad = false;
  rndBackground = false;
}
