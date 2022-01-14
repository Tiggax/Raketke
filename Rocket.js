class Rocket {
    constructor(x,y) {
        this.position = new Vector(x,y);
        this.speed = new Vector(0,0);
        this.moving = true;
        this.radius = 4;
        this.color = "rgb(105,150,132)";
    }

    update(){
        this.move();
        this.checkCollision();
    }

    move(){
        if (this.moving) {
            this.speed.sum(new Vector());
            this.speed.capSize(MAX_ROCKET_SPEED);
            this.position.sum(this.speed);
        }
    }

    checkCollision(){
        //wall
        if(
            this.position.x < 0 ||
            this.position.y < 0 ||
            this.position.x > FRAME_WIDTH ||
            this.position.y > FRAME_HEIGHT
        ){
            this.moving = false;
        }
        //baricade
        if(
            this.position.x > barricade.x &&
            this.position.x < barricade.x +barricade.width &&
            this.position.y > barricade.y &&
            this.position.y < barricade.y +barricade.height
            
        ){
            this.moving = false;
        }
    }

    draw(canvas) {
        canvas.fillStyle = this.color;
        canvas.beginPath();
        canvas.arc(
            this.position.x,
            this.position.y,
            this.radius,
            0,
            2*Math.PI
        );
        canvas.fill();
    }
}