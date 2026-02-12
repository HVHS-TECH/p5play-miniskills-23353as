/*******************************************************/
// P5.play: t23_display_text
// 
// Written by ???
/*******************************************************/
	
/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    console.log("setup: ");
    cnv = new Canvas(windowWidth, windowHeight);
}
	
/*******************************************************/
// draw()
/*******************************************************/
function draw() {

	background('gray');

    let totalSeconds = Math.floor(millis() / 1000);

    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

     if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

     let timer = minutes + ":" + seconds;

    textAlign(CENTER, CENTER);
    textSize(120);
    fill('yellow');
    stroke('black');
    strokeWeight(6);

    text(timer, width / 2, height / 2);
}

/*******************************************************/
//  END OF APP
/*******************************************************/