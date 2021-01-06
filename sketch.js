var world, engine;
var man, manImg;
var bolt1Img, bolt2Img, bolt3Img, bolt4Img;
var drop1;
var umbrella1;
var ground1;
var drop = [];
var rainLevel = 0.5;
var thunder, thunderCount, thunderPos;
var rainMeter = 10;

function preload() {
    manImg = loadAnimation("images/Walkingframe/walking_1.png", "images/Walkingframe/walking_2.png", "images/Walkingframe/walking_3.png", "images/Walkingframe/walking_4.png", "images/Walkingframe/walking_5.png", "images/Walkingframe/walking_6.png", "images/Walkingframe/walking_7.png", "images/Walkingframe/walking_8.png");
    bolt1Img = loadImage("images/thunderbolt/1.png");
    bolt2Img = loadImage("images/thunderbolt/2.png");
    bolt3Img = loadImage("images/thunderbolt/3.png");
    bolt4Img = loadImage("images/thunderbolt/4.png");
    thunder = [bolt1Img, bolt2Img, bolt3Img, bolt4Img];
}

function setup() {
    engine = Matter.Engine.create();
    world = engine.world;
    createCanvas(1200, 600);
    man = createSprite(600, 430);
    man.addAnimation("walking", manImg);
    man.scale = 0.5;
    man.velocityX = 2;
    ground1 = new Ground();
    umbrella1 = new Umbrella(man.x + 14, man.x - 58);
    thunderCount = Math.round(random(0, 3));
    thunderPos = random(man.x - 200, man.x + 100);
}

function draw() {
    background(0);
    noStroke();
    Matter.Engine.update(engine);
    Matter.Body.setPosition(umbrella1.body, { x: man.x + 14, y: man.y - 58 });
    Matter.Body.setPosition(ground1.body, { x: man.x, y: ground1.body.position.y });
    camera.position.x = umbrella1.body.position.x;
    for (var p = 0; p < rainMeter; p++) {
        drop[drop.length] = new Rain(man.x - 600, man.x + 800);
    }
    // if (frameCount % rainLevel === 0) {
    //     drop[drop.length] = new Rain(man.x - 600, man.x + 600);
    // } else {

    // }
    if (drop.length > 0) {
        for (var n = 1; n < drop.length; n++) {
            drop[n].show();
            if (drop[n].body.position.y > 570) {
                Matter.Composite.remove(world, drop[n].body);
                drop.splice(n, 1);
            }
        }
    }
    thunderPos += 2;
    image(thunder[thunderCount], thunderPos, -10, 200, 200);
    if (frameCount % 30 === 0) {
        thunderCount = Math.round(random(0, 3));
        thunderPos = random(man.x - 500, man.x + 500);
    }
    ground1.show();
    drawSprites();
    rect(man.x - 500, 560, 200, 50);
    push();
    fill(0);
    text("Press C for Source Code", man.x - 580, 570);
    text("Press R to Reload", man.x - 580, 550);
    text("Press Arrow Keys to Increase or Decrease Rain Level", man.x - 580, 590);
    text("Rain Level: " + rainMeter, man.x + 500, 590);
    if (rainMeter >= 10) {
        text("You are at the maximum Rain Level !", man.x + 100, 590);
    }
    pop();
}

function keyPressed() {
    if (keyCode === 67) {
        window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C-42";
    }
    if (keyCode === 82) {
        window.location.reload(false);
    }
    if (keyCode === 38) {
        if (rainMeter < 10) {
            rainMeter += 1;
        }
    }
    if (keyCode === 40) {
        if (rainMeter > 0) {
            rainMeter -= 1;
        }
    }
}