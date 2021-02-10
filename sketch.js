var canvas;

var cat, mouse, cat1animation, mouse1animation, cat2animation, mouse2animation, cat3animation, mouse3animation, garden;

function preload() {
    cat1animation = loadAnimation("cat1.png");
    cat2animation = loadAnimation("cat2.png", "cat3.png");
    cat3animation = loadAnimation("cat4.png");
    mouse1animation = loadAnimation("mouse1.png");
    mouse2animation = loadAnimation("mouse2.png", "mouse3.png");
    mouse3animation = loadAnimation("mouse4.png");
    garden = loadImage("garden.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(850, 600, 100, 100);
    cat.addAnimation("catstartimg", cat1animation);
    cat.addAnimation("catrunning", cat2animation);
    cat.addAnimation("catend", cat3animation);
    cat.scale = 0.2;

    mouse = createSprite(180, 600, 100, 100);
    mouse.addAnimation("mousestartimg", mouse1animation);
    mouse.addAnimation("mouserunning", mouse2animation);
    mouse.addAnimation("mouseend", mouse3animation);
    mouse.scale = 0.15;
}

function draw() {
    background(garden)
    
    if (cat.x - mouse.x < (cat.width-mouse.width)-2) {
        cat.velocityX = 0;
        cat.changeAnimation("catend");
        mouse.addAnimation("mouseend", mouse3animation);
        mouse.changeAnimation("mouseend");
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.changeAnimation("catrunning");
        mouse.changeAnimation("mouserunning");
    }
}