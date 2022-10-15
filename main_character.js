class main_character {
    constructor(canvasHeight,canvasWidth){
        this.x = 250;
        this.y = 250;
        this.size = 25;

        this.vecposx = 0;
        this.vecposy = 0;
        this.vecnegx = 0;
        this.vecnegy = 0;

        this.speed = 5;

        this.canvasHeight = canvasHeight;
        this.canvasWidth = canvasWidth;
    }

    keydown(input){
        this.e = input || window.event;
        this.e = this.e.keyCode;
        if(this.e == 90)
            this.vecnegy = -this.speed;
        else if(this.e == 83)
            this.vecposy = this.speed;

        if(this.e == 81 )
            this.vecnegx = -this.speed;
        else if(this.e == 68)
            this.vecposx = this.speed;
        
    }
    
    keyup(input){
        this.e = input || window.event;
        this.e = this.e.keyCode;
        if(this.e == 90)
            this.vecnegy = 0;
        else if(this.e == 83)
            this.vecposy = 0;

        if(this.e == 81 )
            this.vecnegx = 0;
        else if(this.e == 68)
            this.vecposx = 0;
    }

    move(){
        if(this.vecnegx && this.vecposx){}
        else if(this.x-this.speed >= 0 && this.vecnegx)
            this.x += this.vecnegx;
        else if(this.x+this.size+this.speed <= this.canvasWidth && this.vecposx)
            this.x += this.vecposx;
        
        if(this.vecnegy && this.vecposy){}
        else if(this.y-this.speed >= 0 && this.vecnegy)
            this.y += this.vecnegy;
        else if(this.y+this.size+this.speed <= this.canvasHeight && this.vecposy)
            this.y += this.vecposy;
    }

    draw(score){
        if(score < 5) drawcube(this.x,this.y,this.size,"black");
        else if(score < 10) drawcube(this.x,this.y,this.size,"blue");
        else if(score < 20) drawcube(this.x,this.y,this.size,"purple");
        else if(score < 50) drawcube(this.x,this.y,this.size,"red");
        else if(score < 100) drawcircle(this.x,this.y,this.size,"blue");
        else if(score < 200) drawcircle(this.x,this.y,this.size,"purple");
        else if(score < 300) drawcircle(this.x,this.y,this.size,"red");
        else if(score < 400) drawStar(this.x,this.y,this.size,"blue");
        else if(score < 500) drawStar(this.x,this.y,this.size,"purple");
        else if(score < 1000) drawStar(this.x,this.y,this.size,"red");
        else drawStar(this.x,this.y,this.size,"black");
    }

    //getter
    getX = () => this.x;
    getY = () => this.y;
    getSize = () => this.size;
    getX = () => this.x;

    //setter
    setSpeed = (speed) => {this.speed = speed};
}