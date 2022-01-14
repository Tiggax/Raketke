class Barricade {
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = "rgb(192,162,232)";
    }
    draw(canvas) {
        canvas.fillStyle = this.color;
        canvas.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
    }
}