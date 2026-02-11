/*******************************************************/
// P5.play: t08_colliders
// Work with colliders
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/

function func2Call(alien, ball) {
  // delete the alien which was hit
  alien.remove();
}

function setup() {
  console.log("setup:");
  cnv = new Canvas(windowWidth, windowHeight);

  world.gravity.y = 10;

  createWalls();

  alienGroup = new Group();

  ball_1 = new Sprite(width / 2, height / 2, 50, 'd');
  ball_1.color = 'cyan';
  ball_1.vel.x = 2;
  ball_1.bounciness = 100;
  ball_1.friction = 0;
  ball_1.drag = 0;

  alienGroup.collides(ball_1, func2Call);

  for (let i = 0; i < 100; i++) {
    let alien = new Sprite(width / 5, height / 5, 25, 25, 'd');

    alien.vel.x = random(4, 7) * random([-1, 1]);
    alien.vel.y = random(4, 7) * random([-1, 1]);

    alien.bounciness = 1;
    alien.friction = 0;

    alienGroup.add(alien);
  }
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