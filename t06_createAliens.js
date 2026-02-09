/*******************************************************/
// P5.play: t06_createAliens
// Create aliens on mouse click
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

	for (i = 0; i < 100; i++) {
  	alien = new Sprite(width / 2, height / 2, 50, 50, 'd');
  	alien.vel.x = random();
  	alien.vel.y = random();
  	alien.bounciness = 1;
  	alien.friction = 0;
	const VELARRAY = [-1, 1];
	randNum = random(4, 7) * random(VELARRAY);

}

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