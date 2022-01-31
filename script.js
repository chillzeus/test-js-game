let canvas = document.getElementById("myCanvas")
let ctx = canvas.getContext("2d")
let x = 40;
let y = 293;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let collision = false;

//remember to draw stars in random places

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
  //timeVariable += 1;

  if (leftPressed == true) {
  	x += -1.5;
  } if (rightPressed == true) {
  	x += 1.5;
  } if (upPressed == true) {
    y += -2;
    if (timeVariable == 5 && collision == false;) {
        console.log("This worked")
    }
  }
}

let interval = setInterval(draw, 10);