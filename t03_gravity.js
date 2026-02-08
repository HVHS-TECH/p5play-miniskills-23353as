/*******************************************************/
// P5.play: t03_gravity
// Sprite falls due to gravity
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup: ");
	cnv = new Canvas(windowWidth, windowHeight);

	world.gravity.y = 10;

 	testOne = new Sprite(50, 50, 250, 500, 'd');
	testOne.color = 'cyan';
	testOne.rotationSpeed = -2;

	testTwo = new Sprite(1, 1, 250, 500, 's');
	testTwo.color = 'red';
	testTwo.rotationSpeed = -2;

	testThree = new Sprite(100, 100, 250, 500, 'k');
	testThree.color = 'black';
	testThree.rotationSpeed = -2;

	testFour = new Sprite(300, 300, 250, 500, 'n');
	testFour.color = 'green';
	testFour.rotationSpeed = -2;
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