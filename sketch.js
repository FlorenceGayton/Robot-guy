class robot {
    x;
    y;
    w;
    h;
    // linking the parameters to the class variables
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
//// reference points to use while spacing robot limbs
    // reference(){
    //     rectMode(CENTER)
    //     fill(255, 0, 0)
    //     strokeWeight(0);
    //     rect(this.x, this.y, 1, 1)
    //     rect(width/2, 50, this.w, 2)
    //     rect(50, this.y + (this.h / 2), 2, this.h)
    // }


    // method to draw head
    drawHead(){
        rectMode(CORNER)
        fill(200);
        strokeWeight(4);
        rect(this.x - this.w/2 + this.w * 0.1, this.y + (this.y / this.y), this.w * 0.8, this.h * 0.5)
        //draw neck attached to head
        fill(0);
        rect(this.x - (this.w / 15), this.y + (this.h / 2) + (this.h / 10) / 2, this.w / 7.5, this.h / 10)
        line(this.x + this.w * 0.1, this.y, this.x + this.w * 0.2, this.y - this.h * 0.1)
        fill(225, 100, 100)
        circle(this.x + this.w * 0.2 + this.w * 0.04, this.y - this.h * 0.2 + this.h * 0.04, this.w * 0.1)
    }
    // method to draw body
    drawBody(){
        rectMode(CORNER);
        fill(100);
        rect(this.x-(this.w/2), this.y +this.h/2+(this.h / 10), this.w, this.h / 0.7);
    }
    // method to draw face
    drawFace(){
        fill(0);
        circle(this.x - this.w * 0.25, this.y + this.h * 0.25, this.w * 0.05, this.h * 0.05);
        circle(this.x + this.w * 0.25, this.y + this.h * 0.25, this.w * 0.05, this.h * 0.05);
        line(this.x - this.w * 0.05, this.y + this.h * 0.35, this.x + this.w * 0.05, this.y + this.h * 0.35)
    }
    drawArms(){
        fill(200);
        strokeWeight(4);
        rectMode(CORNER);
        rect(this.x-(this.w/2) - this.w * 0.2, this.y + this.h, this.w * 0.2, this.h * 0.25);
        rect(this.x+(this.w/2), this.y + this.h, this.w * 0.2, this.h * 0.25);
    }
    drawWheels(){  
        rect(this.x - this.w /2 - this.w * 0.05, this.y + this.h * 1.8, this.w * 0.2, this.h * 0.5);
        rect(this.x + this.w /2 + this.w * 0.1 - this.w * 0.2 - this.w * 0.05, this.y + this.h * 1.8, this.w * 0.2, this.h * 0.5);

    }
}


// setup canvas
function setup(){
    createCanvas(600, 600);
}

function draw(){
    background(100, 225, 100);
    // declare robot variable and set values
    let Robot = new robot(300, 200, 150, 100);
    // call robot parts methods
    Robot.drawHead();
    Robot.drawBody();
    Robot.drawFace();
    // Robot.reference();
    Robot.drawArms();
    Robot.drawWheels();
}

