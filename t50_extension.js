/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
let ball_1;

function func2Call(ball1Group) {
  ball_1.remove();
}
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth/4, windowHeight);

	world.gravity.y = 10;

	createWalls();

	createNewBall(width / 2, height / 2);
}

function createWalls() {
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'red';

	wallRH = new Sprite(width, height / 2, 8, height, 'k');
	wallRH.color = 'red';

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');
	wallTop.color = 'red';

	wallBot = new Sprite(width / 2, height, width, 8, 'k');
	wallBot.color = 'red';
}

// Function to create a new ball
function createNewBall(x, y) {
  ball1Group = new Group();
	ball_1 = new Sprite(x, y, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.bounciness = 0;
	ball_1.friction = 5;
	ball_1.drag = 1;
}

ball1Group.collides(ball1Group, func2Call);

	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');

	ball_1.moveTowards(mouseX, mouseY, 1);

  if (mouse.presses()) {
		createNewBall(mouseX, mouseY);
	}
}


/*******************************************************/
//  END OF APP
/*******************************************************/