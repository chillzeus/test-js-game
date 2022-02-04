let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let x = 40;
let y = 293;
let dx = 2;
let dy = 2;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let collision = false;
let timeVariable = 5;
let jumped = false;
let floor = 285;

//remember to draw the stars

function drawStars () {
  let random1x = Math.trunc(Math.random() * (5 + 0) + 0)
}

function drawMap() {
	//draws floor
  ctx.beginPath();ctx.rect(0, 308, 500, 30);ctx.fillStyle = "#9c6319";ctx.fill();ctx.closePath();
  //this draws the walkways
  ctx.beginPath();ctx.rect(0, 240, 500, 10);ctx.fillStyle = "Blue";ctx.fill();ctx.closePath();
  ctx.beginPath();ctx.rect(0, 170, 500, 10);ctx.fillStyle = "Blue";ctx.fill();ctx.closePath();
  ctx.beginPath();ctx.rect(0, 100, 500, 10);ctx.fillStyle = "Blue";ctx.fill();ctx.closePath();
}

function drawMan() {
	//draws the man
  ctx.beginPath()
  ctx.rect(x, y, 15, 15)
  ctx.fillStyle = "red"
  ctx.fill()
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if (e.key == "Left" || e.key == "ArrowLeft") {
  	leftPressed = true;
  } if (e.key == "Right" || e.key == "ArrowRight") {
  	rightPressed = true;
  } if (e.key == "ArrowUp") {
      upPressed = true;
  }
}
function keyUpHandler(e) {
	if (e.key == "Left" || e.key == "ArrowLeft"); {
  	leftPressed = false;
  } if (e.key == "Right" || e.key == "ArrowRight"); {
  	rightPressed = false;
  } if (e.key == "ArrowUp") {
    upPressed = false;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawMap();
  drawMan();
  timeVariable += 1;

  if (x < 0) {
    collision = true;
    dx = 0;
    if (rightPressed == true) {
      x += -1;
      dx = 2;
    }
  }
  if (x > 485) {
      collision = true;
      dx = 0;
      if (leftPressed == true) {
      	x += -1;
        dx = 2;
      }
    }
// in theory the y works
  if (y > 285) {
    collision = true;
    dy = 0;
    if (upPressed == true) {
      y += -1;
      dy = 2;
    }
  }
  if (leftPressed == true) {
  	x += -dx;
  } if (rightPressed == true) {
  	x += dx;
  } if (upPressed == true) {
    y += dy;
    jumped = true;
  } if (downPressed == true) {
    y += -dy;
  }

  if (jumped == true) {
    dy = 0;
    if (y > floor + 20) {
      for (let i = 0; i > 20; i++) {
        y += 1;
      }
      jumped = false;
      dy = 2;
    }
  }
}

let interval = setInterval(draw, 10);