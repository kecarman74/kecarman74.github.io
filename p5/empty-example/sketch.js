var j, k, x, y = global
var j = 0;

function setup() {
  createCanvas(1600, 700);
}

function draw() {
  if(mouseIsPressed) {
  		fill(0, j , 0, 100);
  		var j = j + 1;
	} 
	else {
		fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), 160);
		var j = 0;
	}
	ellipse(mouseX, mouseY, 80, 80);
	
}