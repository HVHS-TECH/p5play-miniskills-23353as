/*******************************************************/
// Merge Game - P5.play
/*******************************************************/

let ballGroup;
let loseLineY = 120;
let gameOver = false;
let dangerStartTime = null;
let dangerDuration = 2000;
let score= 0;
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
	console.log("setup");

	cnv = new Canvas(windowWidth/4, windowHeight);

	world.gravity.y = 10;

	createWalls();
	
	ballGroup = new Group();
}

/*******************************************************/
// Create walls
/*******************************************************/
function createWalls() {
	wallLH = new Sprite(0, height / 2, 8, height, 'k');
	wallLH.color = 'black';

	wallRH = new Sprite(width, height / 2, 8, height, 'k');
	wallRH.color = 'black';

	wallTop = new Sprite(width / 2, 0, width, 8, 'k');
	wallTop.color = 'black';

	wallBot = new Sprite(width / 2, height, width, 8, 'k');
	wallBot.color = 'black';
}

/*******************************************************/
// Create new ball
/*******************************************************/
function createNewBall(x, y, size = 50) {
	let ball = new Sprite(x, y, size, 'd');

	ball.color = getBallColor(size);
	ball.bounciness = 0;
	ball.friction = 5;
	ball.drag = 1;

	ball.diameter = size;

	ballGroup.add(ball);
}

/*******************************************************/
// Merge function
/*******************************************************/
function mergeBalls(ballA, ballB) {

	if (ballA.diameter === ballB.diameter) {

		let newSize = ballA.diameter + 20;

		let newX = (ballA.x + ballB.x) / 2;
		let newY = (ballA.y + ballB.y) / 2;

		// Add points depending on the ball size
		if (ballA.diameter === 50) score += 10;   // Cyan
		if (ballA.diameter === 70) score += 20;   // Green
		if (ballA.diameter === 90) score += 30;   // Yellow
		if (ballA.diameter === 110) score += 40;  // Orange
		if (ballA.diameter === 130) score += 50;  // Red
		if (ballA.diameter === 150) score += 60;  // Pink
		if (ballA.diameter === 170) score += 70;  // Purple

		ballA.remove();
		ballB.remove();

		if (newSize > 170) {
			return; 
		}

		createNewBall(newX, newY, newSize);
	}
}
/*******************************************************/
// Ball colors by size
/*******************************************************/
function getBallColor(size) {
	if (size === 50) return 'cyan';
	if (size === 70) return 'green';
	if (size === 90) return 'yellow';
	if (size === 110) return 'orange';
	if (size === 130) return 'red';
	if (size === 150) return 'pink';
	if (size ===170) return 'purple';

	return 'white';
}

/*******************************************************/
// draw()
/*******************************************************/
function draw() {
	background('gray');
	stroke('red');
	strokeWeight(4);
	line(0, loseLineY, width, loseLineY);
	noStroke();
	if (!gameOver) {

	ballGroup.collides(ballGroup, mergeBalls);

	let ballAboveLine = false;

	for (let ball of ballGroup) {
		if (ball.y - ball.diameter/2 < loseLineY) {
			ballAboveLine = true;
			break;
		}
	}

	// If a ball is above the line
	if (ballAboveLine) {

		// If timer hasn't started yet
		if (dangerStartTime === null) {
			dangerStartTime = millis();
		}

		// If it has been above long enough
		if (millis() - dangerStartTime > dangerDuration) {
			gameOver = true;
		}

	} else {
		// Reset timer if balls fall back down
		dangerStartTime = null;
	}

	if (mouse.presses() && mouseY < loseLineY) {
    createNewBall(mouseX, mouseY);
}
}

if (gameOver) {
	fill('black');
	textAlign(CENTER);
	textSize(50);
	text("GAME OVER", width/2, height/2);
	noLoop(); // stops the game
}

fill('white');
textSize(30);
textAlign(LEFT, TOP);
text("Score: " + score, 20, 20);
}