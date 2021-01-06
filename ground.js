class Ground {
    constructor() {
        var options = {
            isStatic: true
        }
        this.body = Matter.Bodies.rectangle(200, 600, 2000, 50 ,options);
        this.body.velocity.x = 2;
        Matter.World.add(world, this.body);
    }
    show() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, 2000, 50);
    }
}