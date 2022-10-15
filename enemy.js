class enemy {
    constructor(speed,enemyImg,cautionImg, sizeX, sizeY){
        this.size = 30;
        this.speed = speed;
        this.pos2 = getRandomInt(sizeX - 30);
        this.nextpos = getRandomInt(sizeY - 30);
        this.direction = getRandomInt(4);
        this.nextdirection = getRandomInt(4);
        if(this.direction == 1 || this.direction == 3) this.pos1 = 800;
        else this.pos1 = -30;

        this.enemy = enemyImg
        this.caution = cautionImg
    }

    move() {
        switch (this.direction){
            case 0: this.pos1 += this.speed; break; //de gauche a droite
            case 1: this.pos1 -= this.speed; break; //de droite a gauche
            case 2: this.pos1 += this.speed; break; //de haut en bas
            case 3: this.pos1 -= this.speed; break; //de bas en haut
            default: break;
        }
    }

    draw(size){
        if(this.direction == 0 || this.direction == 1) drawImage(ennemy,this.pos1,this.pos2);
        else drawImage(this.enemy,this.pos2,this.pos1);
        
        if(
            ([0,2].includes(this.direction) && this.pos1 > size-this.speed*25) ||
            ([1,3].includes(this.direction) && this.pos1 < this.speed*25)
        )
        switch (this.nextdirection){
            case 0: drawImage(this.caution,5,this.nextpos); break;
            case 1: drawImage(this.caution,size-30,this.nextpos); break;
            case 2: drawImage(this.caution,this.nextpos,5); break;
            default: drawImage(this.caution,this.nextpos,size-30); break;
        }
    }

    async die(size){
        if(this.pos1 > size || this.pos1 < -30){
            this.pos2 = this.nextpos;
            this.nextpos = getRandomInt(size - 30);
            this.direction = this.nextdirection;
            this.nextdirection = getRandomInt(4);

            if(this.direction == 1 || this.direction == 3) this.pos1 = size;
            else this.pos1 = -30;
        }
    }

    kill(x,y,size){
        if(this.direction == 0 || this.direction == 1){
            if (x < this.pos1 + this.size && x + size > this.pos1 && y < this.pos2 + this.size && size + y > this.pos2) end();
        }else{
            if (x < this.pos2 + this.size && x + size > this.pos2 && y < this.pos1 + this.size && size + y > this.pos1) end();
        }
    }
}