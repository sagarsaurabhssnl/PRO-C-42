class Umbrella {
    constructor(x, y) {
        var options = {
            isStatic: true,
            friction:0
        }
        this.body = Matter.Bodies.circle(x, y, 100, options);
        this.body.velocity.x = 2;
        Matter.World.add(world, this.body);
    }
    show() {
        ellipse(this.body.position.x, this.body.position.y, 200, 200);
    }
}