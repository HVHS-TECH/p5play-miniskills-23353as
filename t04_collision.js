/*******************************************************/
// P5.play: t04_collision
// Sprite falls due to gravity & collides with the floor
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;
 	test = new Sprite(0.5, 0.5, 250, 500, 'd');

	test.color = 'cyan';

	test.rotationSpeed = -2;

	test.vel.x = 2;
	test.bounciness = 1.5
	platform_1 = new Sprite(0, 500, 500, 10, 'k');
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