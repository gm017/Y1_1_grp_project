/*
Year 0ne, group Project
 Video Synthesizer

 Instructions for use

 load up the processing pde
 QWERTY keyboard
 a: show an ellipse
 s: show a square
 d: show random shape
 f: show another random shape
 j: make shape move randomly along the X axis
 k: make shape move randomly along the Y axis
 ;: make shape larger
 z: randomly change the colour of the background
 x: randomly change the colour of the shape


 /////// functions to add.
 // oscillation of objects
 // add quad with movable points
 //quad added but points need to move???????

 //maybe move into OF or Cinder

 //possible problems to address

 // when key released, objects disappear. (Fixed I think)

 // multiple key presses affect the above.

 */



// import {TRIANGLE_STRIP} from "./p5";

let drawEllipse = false;
let drawRectangle = false;
let drawQuad = false;
let drawShape = false;
let rndBackground = false;

let sz = 1000;
//////some random thing here

let x;
let y;
let posX;
let posY;
let qx1, qy1, qx2, qy2, qx3, qy3, qx4, qy4; // quad points
let r, g, b;
let amt1 = 0.0; //noise1 movement
let amt2 = 0.0; // noise 2 movement
// let sinAmt = 0.0; // sin movement

let sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9, sound10, sound11, sound12;


function preload() {
  sound1 = loadSound('audio/drone01.mp3');
  sound2 = loadSound('audio/drone02.mp3');
  sound3 = loadSound('audio/drone03.mp3');
  sound4 = loadSound('audio/drone04.mp3');
  sound5 = loadSound('audio/drone05.mp3');
  sound6 = loadSound('audio/drone06.mp3');
  sound7 = loadSound('audio/drone07.mp3');
  sound8 = loadSound('audio/drone08.mp3');
  sound9 = loadSound('audio/drone09.mp3');
  sound10 = loadSound('audio/drone12.mp3');
  sound11 = loadSound('audio/drone10.mp3');
  sound12 = loadSound('audio/drone11.mp3');
}


function setup() {
  createCanvas(displayWidth, displayHeight);
  smooth();
  rectMode(CENTER);
  ellipseMode(CENTER);
  noStroke();


}

function draw() {
  //fill background
  background(0);



  posX = width/2;
  posY = height/2;
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

  // let sinX = sin(sinAmt);

  //////////////////////////////////////
  if (rndBackground == true) {
    background(random(255), random(255), random(255));

  }

  //draw ellipse
  if (drawEllipse == true) {
    fill(r, g, b);
    ellipse(posX * x, posY * y, sz, sz);
  }

  // make the shapes larger by pressing ;
  if ((key === ';') || (key == ':')) {
    sz = sz + 1;
  }

  //draw rectangle
  if (drawRectangle === true) {
    fill(r, g, b);
    rect(posX * x, posY * y, sz, sz);
  }

  //draw quad
  if (drawQuad === true) {
    fill(r, g, b);
    //quad(x1,       y1,      x2,            y2,     x3,       y3,     x4,      y4)
    quad(qx1 * x, qy1 * y, qx2 * (x + y), qy2 * y, qx3 * x, qy3 * y, qx4 * x, qy4 * y);
  }

  //draw randomShape
  if(drawShape === true){
    fill(r, g, b, 100);
    beginShape(TRIANGLE_STRIP);
      vertex(qx1*qy1, qy1*qx2);
      vertex(qx2, qy2);
      vertex(qx3, qy3);
      vertex(qx4, qy4);
      vertex(qx1/qx2, qy3/qy4);
      vertex(qx3*qx1, qy4*qy2);
      vertex(qx1/qx2*qx3+qx4, qy1+qy2*qy3/qy4);
      endShape();
  }


  //fill shapes

  if (keyIsDown(88)) {
    r = random(255);
    g = random(255);
    b = random(255);
  }


  if (keyIsDown(67)) {

    stroke(random(100, 0));

    loadPixels();
    let d = pixelDensity();

    for (let i = 0; i < (4 * (width * d) * (height * d)); i += 4) {
      if (pixels[i] % 4 === 0) {
        pixels[i] = 255;
        pixels[i + 1] = 100;
        pixels[i + 2] = 4;
        pixels[i + 3] = 50;
      }
    }


    updatePixels();

  }



  //sinX = sinX + 0.5;
} // end of draw




// functions
function keyPressed() {
  //Q resets size
  if ((key === 'q') || (key === 'Q')) {
    sz = 1000;
  }
  if ((key == 'a') || (key == 'A')) {
    drawEllipse = true;
    sound1.play();
  }
  if ((key == 'S') || (key == 's')) {
    drawRectangle = true;
    sound2.play();
  }
  if ((key == 'D') || (key == 'd')) {
    drawQuad = true;
    sound3.play();
  }

  //Come up with new visuals for further keys


  if ((key == 'F') || (key == 'f')) {
    drawShape = true;
    sound4.play();
  }
  if (key == 'g') {
    sound5.play();
  }
  if (key == 'h') {
    sound6.play();
  }
  if (key == 'j') {
    sound7.play();
  }
  if (key == 'k') {
    sound8.play();
  }
  if (key == 'l') {
    sound9.play();
  }

  if ((key == 'z') || (key == 'Z')) {
    rndBackground = true;
    sound10.play();
  }

  if (key === 'x') {
    sound11.play();
  }

  if (key === 'c') {
    sound12.play();
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

  if ((key == 'a') || (key == 'A')) {
    drawEllipse = false;
    sound1.stop();
  }

  if ((key == 'S') || (key == 's')) {
    drawRectangle = false;
    sound2.stop();
  }
  if ((key == 'D') || (key == 'd')) {
    drawQuad = false;
    sound3.stop();
  }
  if ((key == 'F') || (key == 'f')) {
    drawShape = false;
    sound4.stop();
  }
  if (key == 'g') {
    drawRectangle = false;
    sound5.stop();
  }
  if (key == 'h') {
    sound6.stop();
  }
  if (key == 'j') {
    sound7.stop();
  }
  if (key == 'k') {
    sound8.stop();
  }
  if (key == 'l') {
    sound9.stop();
  }
  if ((key == 'z') || (key == 'Z')) {
    rndBackground = false;
    sound10.stop();
  }
  if (key === 'x') {
    sound11.stop();
  }
  if (key === 'c') {
    sound12.stop();
  }


  //If uncommented resets shapes to white when x is not held

  // if ((key === 'x') || (key === 'X')) {
  //   r = 255;
  //   g = 255;
  //   b = 255;
  // }

}


