class Pendulum {
    constructor(x, y, color){
        var options = {
            restitution: 1,
            friction: 0,
            frictionAir: 0,
            slop: 1,
            inertia: Infinity
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.x = x;
        this.y = y;
        this.radius = 20;
        this.color = color;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        circle(pos.x, pos.y, this.radius);
        pop();
    }
}