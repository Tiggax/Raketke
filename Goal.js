class Goal {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.color = "rgb(59,178,71)";
    }
    draw(canvas) {
        canvas.fillStyle = this.color;
        canvas.beginPath();
        canvas.arc(
            this.x,
            this.y,
            this.radius,
            0,
            2*Math.PI
        );
        canvas.fill();
    }
}