/*******************************************************/
// P5.play: t05_createWalls
// Create walls around the canvas
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

	createWalls();

 	test = new Sprite(width / 2, height / 2, 50, 50, 'd');
	test.color = 'cyan';
	test.rotationSpeed = -2;
	test.vel.x = 2;
	test.bounciness = 100

	ball_1 = new Sprite(width / 2, height / 2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 100;
	ball_1.friction = 0;
	ball_1.drag = 0;
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
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
		background('gray');
}

/*******************************************************/
//  END OF APP
/*******************************************************/