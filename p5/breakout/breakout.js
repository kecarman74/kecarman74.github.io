var h = 480;
var w = 720;
var x = 360;
var y = 470;
var lp = 45;
var hp = 6;
var bx = 260;
var by = 450;
var dx = 5;
var dy = -5;
var ballr = 14;
var brickRowCount = 5;
var brickColumnCount = 7;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 60;
var c1 = Math.floor(Math.random() * 256);
var c2 = Math.floor(Math.random() * 256);
var c3 = Math.floor(Math.random() * 256);
var score = 0;

var bricks = [];
for(c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(r=0; r<brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function setup() {
	createCanvas(w, h);
	strokeWeight(2);
	ellipseMode(RADIUS);
	}

function draw() {
	background(204);
	
	stroke(102); 

	fill(102); 
	rect(mouseX-lp, y, 2 * lp, hp); 

	fill(250); 
	ellipse(bx, by, ballr, ballr); 
	bx = bx + dx;
	by = by + dy;

	if(by + dy < ballr) {
    	dy = -dy;
	} 
	else if(by + dy > h-ballr) {
    		if(bx + ballr > mouseX-lp && bx + ballr < mouseX-lp + 2 * lp) {
        		dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}
	if(bx + dx > w-ballr || bx + dx < ballr) {
   		dx = -dx;
	}
	drawBricks();
	collisionDetection();
}

function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
        	if(bricks[c][r].status == 1) {
	            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
	            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
	            bricks[c][r].x = brickX;
	            bricks[c][r].y = brickY;
	            fill(c1, c2, c3, 160);
	            rect(brickX, brickY, brickWidth, brickHeight);
	        }

        }
    }

}

function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
            if(b.status == 1){
	            if(bx > b.x && bx < b.x+brickWidth && by > b.y && by < b.y+brickHeight) {
	                dy = -dy;
	                b.status = 0;
	                score = score + 1;
	                if(score == brickRowCount*brickColumnCount) {
                        alert("YOU WIN!!!!");
                        document.location.reload();
                    }

	               
            	}
                
            }
        }
    }
}