/*******************************************************/
// P5.play: t07_groups
// Create aliens and add to a group on mouse click
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

	alienGroup = new Group();

	for (let i = 0; i < 10; i++) {
  let alien = new Sprite(width / 2, height / 2, 50, 50, 'd');
  
  const VELARRAY = [-1, 1];

  let directionX = VELARRAY[Math.floor(Math.random() * VELARRAY.length)];
  let directionY = VELARRAY[Math.floor(Math.random() * VELARRAY.length)];
  let speedX = random(4, 7) * directionX;
  let speedY = random(4, 7) * directionY;

  alien.vel.x = speedX;
  alien.vel.y = speedY;
  alien.bounciness = 1;
  alien.friction = 0;
  alienGroup.add(alien);
}

	ball_1 = new Sprite(width / 2, height / 2, 50, 'd');
	ball_1.color = 'cyan';
	ball_1.vel.x = 2;
	ball_1.bounciness = 10000;
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