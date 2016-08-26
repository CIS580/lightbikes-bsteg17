var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var x = 0;
var y = 0;

var input = {
	up:false,
	down:false,
	left:false,
	right:false
}

window.onkeydown = function(event) {
	console.log("hi");
	switch(event.keyCode) {
		case 38:
		case 87:
			input.up = true;
			break;
		case 37:
		case 65:
			input.left = true;
			break;
		case 39:
		case 68:
			input.right = true;			
			break;
		case 40:
		case 83:
			input.down = true;
			break;
	}
}

window.onkeyup = function(event) {
	console.log("hi");
	switch(event.keyCode) {
		case 38:
		case 87:
			input.up = false;
			break;
		case 37:
		case 65:
			input.left = false;
			break;
		case 39:
		case 68:
			input.right = false;
			break;
		case 40:
		case 83:
			input.down = false;
			break;
	}
}

function loop() {
	if (input.up) { y--; }
	if (input.left) { x--; }
	if (input.down) { y++; }
	if (input.right) { x++; }
	ctx.fillRect(x,y,50,50);	
	setTimeout(loop, 20);	
}

loop();
