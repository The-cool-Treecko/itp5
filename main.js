function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 50, 50, 540, 370);
    tint(tint_color);
    rect(30, 20, 55, 55);
    rect(550, 20, 55, 55);
    rect(30, 400, 55, 55);
    rect(550, 400, 55, 55);
    ellipse(60, 230, 55, 55);
    ellipse(580, 230, 55, 55);
}

function filter_tint() {
    tint_color = document.getElementById("tint").value;
}

function take_snapshot() {
    save('image.png')
}