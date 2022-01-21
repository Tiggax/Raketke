class Rocket {
    constructor(x,y,DNA) {
        this.position = new Vector(x,y);
        this.speed = new Vector(0,0);
        this.moving = true;

        this.radius = 4;
        this.color = "rgb(105,150,132)";
        this.fitness = 0;
        this.evolved = false;
        this.DNA = DNA;
        this.indexDNA = 0;
        if (!DNA) {
            this.generateRandomDNA();
        }
    }
    calculateFitness(){
        let base = 1 / this.position.distTo(goal.x,goal.y);
        let noCollisionMultiplier = 1;
        let evolutionMultiplier = 1;
        let speedMultiplier = 1;
        if (this.moving) {
            noCollisionMultiplier = 5;
        }
        if (this.evolved) {
            evolutionMultiplier = 10;
            speedMultiplier = 1 / this.indexDNA + 1
        }
        this.fitness = base *
        noCollisionMultiplier *
        evolutionMultiplier *
        speedMultiplier;
    }
    generateRandomDNA(){
        this.DNA;
        for (let i = 0; i < GENERATION_LENGTH; i++) {
            this.DNA.push(new Vector());            
        }
    }

    update(){
        this.move();
        this.checkCollision();
    }

    move(){
        if (this.moving && !this.evolved) {
            this.speed.sum(this.DNA[this.indexDNA]);
            this.speed.capSize(MAX_ROCKET_SPEED);
            this.position.sum(this.speed);
            this.indexDNA++;
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
        if (this.position.distTo(goal.x,goal.y)<=this.radius+goal.radius) {
            this.evolved = true;
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