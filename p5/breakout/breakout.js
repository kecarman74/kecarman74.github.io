var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var ballrad = 10;
var paddleHeight = 10;
var paddleWidth = 75;

function setup() {
  createCanvas(1600, 700);
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballrad, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}