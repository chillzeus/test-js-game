let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let x = 40;
//second level is 225;
let y = 225;
let dx = 2;
let dy = 2;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;
let collision = false;
let timeVariable = 5;
let floor = 292;

//remember to draw the stars

function drawStars () {
  let random1x = Math.trunc(Math.random() * (5 + 0) + 0)
}

function drawMap() {

	//draws floor
  //ctx.beginPath();ctx.rect(0, 308, 500, 30);ctx.fillStyle = "#9c6319";ctx.fill();ctx.closePath();
  drawPath(0, 308, 500, 30, "#9c6319");
  //this draws the walkways
  //ctx.beginPath();ctx.rect(0, 240, 500, 10);ctx.fillStyle = "Blue";ctx.fill();ctx.closePath();
  drawPath(0, 240, 500, 10, "Blue");
  drawPath(0, 170, 500, 10, "Blue");
  drawPath(0, 100, 500, 10, "Blue");
  //draws the ladders
  drawPath(430, 252, 15, 55,"Grey");
}

function drawPath(x, y, w, h, fillStyle) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.closePath();
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
  } if (e.key == "ArrowDown") {
      downPressed = true;
  }
}
function keyUpHandler(e) {
	if (e.key == "Left" || e.key == "ArrowLeft"); {
  	leftPressed = false;
  } if (e.key == "Right" || e.key == "ArrowRight"); {
  	rightPressed = false;
  } if (e.key == "ArrowUp") {
    upPressed = false;
  } if (e.key == "ArrowDown") {
    downPressed = false;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawMap();
  drawMan();
  timeVariable += 1;

  //this is where collision detection will be
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
  if (y > 292) {
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
    y += -dy;
    if (collision == true && downPressed == false) {
      
    }
  }
  if (downPressed == true) {
    y += dy;   
  }
  //remember new variable for levels (floor??)
  if (y < floor) {
    y += 0.7;
  }
}  

let interval = setInterval(draw, 10);
