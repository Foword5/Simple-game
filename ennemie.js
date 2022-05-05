class ennemie {
    constructor(speed){
        this.size = 30;
        this.speed = speed;
        this.pos2 = getRandomInt(770)+30;
        this.direction = getRandomInt(4);
        if(this.direction == 1 || this.direction == 3){
            this.pos1 = 800;
        }else{
            this.pos1 = -30;
        }
    }

    move() {
        switch (this.direction){
            case 0: this.pos1 += this.speed; break;
            case 1: this.pos1 -= this.speed; break;
            case 2: this.pos1 += this.speed; break;
            case 3: this.pos1 -= this.speed; break;
            default: break;
        }
    }

    draw(){
        if(this.direction == 0 || this.direction == 1){
            drawcube(this.pos1,this.pos2,this.size,"green");
        }else{
            drawcube(this.pos2,this.pos1,this.size,"green");
        }
    }

    die(){
        if(this.pos1 > 800 || this.pos1 < -30){
            this.pos2 = getRandomInt(770)+30;
            this.direction = getRandomInt(4);
            if(this.direction == 1 || this.direction == 3){
                this.pos1 = 800;
            }else{
                this.pos1 = -30;
            }
        }
    }

    kill(x,y,size){
        if(this.direction == 0 || this.direction == 1){
            if (x < this.pos1 + this.size && x + size > this.pos1 && y < this.pos2 + this.size && size + y > this.pos2) {
                end();
            }
        }else{
            if (x < this.pos2 + this.size && x + size > this.pos2 && y < this.pos1 + this.size && size + y > this.pos1) {
                end();
            }
        }
    }
}