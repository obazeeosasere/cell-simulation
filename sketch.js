let nutrientX = 50;
function setup() {
    createCanvas(600, 400);    
}

function draw() {
    background(240);
    drawcell(400, 200);
    drawnutrient(nutrientX, 200);
    nutrientX += 2;
    if (nutrientX >= 325) {
        nutrientX = 50;
    }
}

function drawcell(x, y) {
    circle(x, y, 150);
    circle(x, y, 50);
}

function drawnutrient(x, y) {
    circle(x, y, 12);
}