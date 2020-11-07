class Roof {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(380, 200, 200, 10, options);
        World.add(world, this.body)
    }

    display(){
        push();
        rectMode(CENTER);
        fill("white");
        rect(360, 100, 200, 10);
        pop();
    }
}