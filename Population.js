class Population {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.rockets = [];

        this.matingPool = [];
        this.children = [];
    }
    evaluate(){
        let maxFitness = 0;
        for (const rocket of this.rockets) {
            rocket.calculateFitness();
            if (rocket.fitness > maxFitness) {
                maxFitness = rocket.fitness;
            }
        }
        for (const rocket of this.rockets) {
            rocket.fitness = rocket.fitness / maxFitness*100;
        }
    }
    selection(){
        this.matingPool = [];
        for (const rocket of this.rockets) {
            for (let i = 0; i < rocket.fitness; i++) {
                this.matingPool.push(rocket);         
            }
        }
    }
    crossover(){
        this.children = [];
        for (let i = 0; i < POPULATION_SIZE; i++) {
            const parent1 = this.randomParent();    
            const parent2 = this.randomParent();
            const childDNA = [];
            for (let j = 0; j < GENERATION_LENGTH; j++) {
                if (j<GENERATION_LENGTH/2) {
                    childDNA.push(parent1.DNA[j]);
                }else{
                    childDNA.push(parent2.DNA[j]);
                }
            }
            this.children.push(new Rocket(this.x,this.y,childDNA));
        }
    }
    mutation(){

    }
    randomParent(){
        this.matingPool[this.randomIndex(this.matingPool.length)];
    }
    randomIndex(bound){
        return Math.floor(Math.random()*bound);
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