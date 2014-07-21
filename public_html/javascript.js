window.onload = function() {
    main();
};
function main() {
    var canvas = defineCanvas(100, 250);
    speed = 1;
    red = 255;
    green = 0;
    blue = 0;
    var circleArray = [new Circle(15, 100, 15, 1, 1),
        new Circle(78, 15, 15, -1, 1),
        new Circle(20, 87, 15, 1, -1),
        new Circle(45, 56, 15, -1, -1),
        new Circle(33, 66, 15, -1, 1)];
    line = document.getElementById("line");
    drawOnCanvas(canvas, circleArray);
}
function Circle(centerX, centerY, radius, rX, rY) {
    this.x = centerX;
    this.y = centerY;
    this.rX = rX;
    this.rY = rY;
    this.radius = radius;
    this.diameter = 2 * this.radius;
}
function drawOnCanvas(canvas, cArray) {
    var color = "rgba("+red+","+green+","+blue+",1)";
    canvas.fillStyle = color;
    canvas.clearRect(0, 0, width, height);
    canvas.beginPath();
    var c = cArray[0];
    for (var i = 0; i < cArray.length; i++) {
        c = cArray[i];
        canvas.beginPath();
        canvas.arc(c.x, c.y, c.radius, 0, 2 * Math.PI);
        canvas.fill();
        if (c.x + c.radius > width) {
            c.rX *= -1;
        }
        else
        if (c.x - c.radius < 0)
            c.rX *= -1;
        if (c.y + c.radius > height)
            c.rY *= -1;
        else
        if (c.y - c.radius < 0)
            c.rY *= -1;
        c.x += speed*c.rX;
        c.y += speed*c.rY;
    }
    setTimeout(function() {
        drawOnCanvas(canvas, cArray);
    }, 1);
}
function defineCanvas(w, h) {
    width = w;
    height = h;
    var newCanvas = document.createElement("canvas");
    newCanvas.id = "canvas";
    newCanvas.width = width;
    newCanvas.height = height;
    newCanvas.style.border = "1px solid";
    document.body.appendChild(newCanvas);
    var canvas = document.getElementById("canvas").getContext("2d");
    return canvas;
}
function changeSpeed(){
    var slider = document.getElementById("speedSlider");
    var speedDisplay = document.getElementById("speed");
    speedDisplay.innerHTML = "Speed: " + slider.value;
    speed = slider.value;
}
function changeColor(){
    var redSlider = document.getElementById("redSlider");
    var blueSlider = document.getElementById("blueSlider");
    var greenSlider = document.getElementById("greenSlider");
    var redDisplay = document.getElementById("red");
    var blueDisplay = document.getElementById("blue");
    var greenDisplay = document.getElementById("green");
    redDisplay.innerHTML = "Red: " + redSlider.value;
    greenDisplay.innerHTML = "Green: " + greenSlider.value;
    blueDisplay.innerHTML = "Blue: " + blueSlider.value;
    red = redSlider.value;
    green = greenSlider.value;
    blue = blueSlider.value;
}
