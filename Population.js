class Population {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.rockets = [];
    }
    generateStartingRockets(){
        for (let i = 0; i < POPULATION_SIZE; i++) {
            this.rockets.push(new Rocket(this.x,this.y));       
        }
    }
    draw(canvas) {
        for (const rocket of this.rockets) {
            rocket.draw(canvas);
            
        }
    }
    update(){
        for (let rocket of this.rockets) rocket.update();
    }

}