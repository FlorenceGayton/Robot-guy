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
    move(){
        if (this.x > 150){
            if (keyIsDown(65)) this.x -= 5; // A
        }
        if (this.x < 450){
            if (keyIsDown(68)) this.x += 5; // D
        }

    }
    draw(){
        // call robot parts methods
        Robot.drawHead();
        Robot.drawBody();
        Robot.drawFace();
        // Robot.reference();
        Robot.drawArms();
        Robot.drawWheels();
    }
    idle(){
   // toggle every second: even seconds up, odd seconds down
    if (floor(millis() / 900) % 2 === 0) {
      this.y = robotH - 2; // move up 1
    } else {
      this.y = robotH + 2; // move down 1
    }
  }
}

class scenery {
    x;
    y;
    h;
    w;
    constructor(x, y, h, w){
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }
    floor(){
        strokeWeight(0);
        fill(150);
        triangle(this.x, this.y + this.h, 100, 360, 100, this.y + this.h);
        triangle(this.x + this.w, 600, 500, this.y + this.h, 500, 360);
        rect(100, 360, 400, 240)
        strokeWeight(2);
        line(0, 600, 100, 360);
        line(600, 600, 500, 360);
        line(100, 360, 500, 360);
        line(100, 360, 100, 0);
        line(500, 360, 500, 0);
        fill(60, 120, 225)
        rect(150, 100, 300, 160);
        line(300, 100, 300, 260)
        line(150, 180, 450, 180);
    }
}


let robotX = 300;
let robotY = 100;
let robotH = 250;
let Robot;
let Scenery;

// setup canvas
function setup(){
    createCanvas(600, 600);
    // declare robot variable and set values
    Robot = new robot(robotX, robotY, 100, 80);
    Scenery = new scenery(0, 0, width, height);

}

function draw(){
    background(100, 225, 100);
    Scenery.floor();
    Robot.move();
    Robot.draw();
    Robot.idle();

}

