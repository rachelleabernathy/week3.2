function setup(){
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, circlOutlineColor, dotColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(3);
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    noFill();
    stroke('orange');
    strokeWeight(2);
    circle(50, 50, 50);
    stroke('black');
    strokeWeight(2);
    circle(150, 150, 50);
    stroke('white');
    strokeWeight(2);
    circle(150, 50, 50);
    stroke('pink');
    strokeWeight(2);
    circle(50, 150, 50);
}
function draw() {
    createTile(0, 0, 'red', 'white');
    createTile(0, 200, 'green', 'yellow');
    createTile(0, 200, 'blue', 'white');
    createTile(200, -400, 'cyan', 'yellow');
    createTile(0, 200, 'blue', 'white');
    createTile(0, 200, 'red', 'white');
    createTile(200, -400, 'green', 'yellow');
    createTile(0, 200, 'red', 'white');
    createTile(0, 200, 'cyan', 'yellow')
}