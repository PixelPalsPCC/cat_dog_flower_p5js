// Objects and Images
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.8-objects-and-images.html
// https://youtu.be/i2C1hrJMwz0
// https://editor.p5js.org/codingtrain/sketches/H44xHm5a

let bubbles = [];
let flower;
let kittens = [];
let puppies = [];
let meow;
let bark;

function preload() {
  flower = loadImage('images/flower.png');
  for (let i = 0; i < 5; i++) {
    kittens[i] = loadImage(`images/kitten${i}.jpg`);
    puppies[i] = loadImage(`images/puppy${i}.jpg`);
  }
  meow = loadSound('sounds/cat-call-meow-102607.mp3');
  bark = loadSound('sounds/single-dog-bark-king-charles-spaniel-41366.mp3');
}

function setup() {
  frameRate(5);
  createCanvas(1200, 900);
  for (let i = 0; i < 5; i++) {
    let xc = random(width);
    let yc = random(height);
    let xd = random(width);
    let yd = random(height);
    let r = random(50, 150);
    // let kitten = random(kittens);
    let c = new CatBubble(xc, yc, r);
    let d = new DogBubble(xd, yd, r);
    bubbles.push(c);
    bubbles.push(d);
  }
}

function mouseMoved() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].speak(mouseX, mouseY);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class DogBubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.puppy = random(puppies);
    this.flower = false;
  }

   speak(px, py) {
    if (!this.flower &&
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      console.log('Woof!');
      bark.play();
    }
  }


  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.puppy = flower; //random(puppys);
      this.flower = true;
    }
  }

  move() {
    this.x = this.x + random(-4, 4);
    this.y = this.y + random(-4, 4);
  }

  show() {
    image(this.puppy, this.x, this.y, this.r, this.r);

    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}

class CatBubble {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = random(kittens);
    this.flower = false;
  }

   speak(px, py) {
    if (!this.flower &&
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      console.log('Meow!');
      meow.play();
    }
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.kitten = flower; //random(kittens);
      this.flower = true;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}