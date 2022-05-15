class ennemie {
    constructor(speed){
        this.size = 30;
        this.speed = speed;
        this.pos2 = getRandomInt(770)+30;
        this.direction = getRandomInt(4);
        this.image = document.getElementById("ennemy_img");
        this.caution = document.getElementById("caution");
        this.timer = new Date().getTime();
        this.canMove = false;
        if(this.direction == 1 || this.direction == 3){
            this.pos1 = 800;
        }else{
            this.pos1 = -30;
        }
    }

    move() {
        if(this.canMove){
            switch (this.direction){
                case 0: this.pos1 += this.speed; break; //de gauche a droite
                case 1: this.pos1 -= this.speed; break; //de droite a gauche
                case 2: this.pos1 += this.speed; break; //de haut en bas
                case 3: this.pos1 -= this.speed; break; //de bas en haut
                default: break;
            }
        }
    }

    draw(){
        if(this.canMove){
            if(this.direction == 0 || this.direction == 1) drawImage(this.image,this.pos1,this.pos2);
            else drawImage(this.image,this.pos2,this.pos1);
        }else{
            this.canMove = new Date().getTime() > this.timer + 500;
            switch(this.direction){
                case 0: drawImage(this.caution,5,this.pos2); break;
                case 1: drawImage(this.caution,770,this.pos2); break;
                case 2: drawImage(this.caution,this.pos2,5); break;
                default: drawImage(this.caution,this.pos2,770); break;
            }
        }
    }

    async die(){
        if(this.pos1 > 800 || this.pos1 < -30){
            this.timer = new Date().getTime();
            this.pos2 = getRandomInt(770)+30;
            this.direction = getRandomInt(4);

            if(this.direction == 1 || this.direction == 3){
                this.pos1 = 800;
            }else{
                this.pos1 = -30;
            }
            this.timer = new Date().getTime();
            this.canMove = false;
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