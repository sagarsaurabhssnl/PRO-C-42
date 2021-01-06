class Rain {
    constructor(x1, x2) {
        var options = {
            restitution: 0.2
        }
        this.body = Matter.Bodies.circle(random(x1, x2), -10, 2, options);
        Matter.World.add(world, this.body);
    }
    show() {
        fill("#45c1e0");
        ellipse(this.body.position.x, this.body.position.y, 4, 4);
    }
}