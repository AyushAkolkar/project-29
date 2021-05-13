class poly{

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        //NameSpacing(renaming width and height)
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image=loadImage("ball and tower/pollygon.jpg");
    }

    display() {
        imageMode(CENTER);
        var pos = this.body.position;
        strokeWeight(2);
        fill("red");
        image(this.image, 101,101,this.width,this.height);
        rect(pos.x, pos.y, this.width, this.height);

    }
}