/*******************************************************/
// P5.play: t21_head2Mouse
// Move sprite towards the mouse' position
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
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');

	testOne.moveTowards(mouseX, mouseY, 1);

}

/*******************************************************/
//  END OF APP
/*******************************************************/