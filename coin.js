class coin {
    constructor(sizeX, sizeY){
        this.x = getRandomInt(sizeX-120)+50;
        this.y = getRandomInt(sizeY-120)+50;
        this.size = 20;
    }

    touch_move_coin(main_char, sizeX, sizeY){
        if (
        main_char.getX() < this.x + this.size && 
        main_char.getX() + main_char.getSize() > this.x && 
        main_char.getY() < this.y + this.size && 
        main_char.getSize() + main_char.getY() > this.y) {
    
            drawcube(this.x,this.y,this.size,"darkgrey");
    
            this.x = getRandomInt(sizeX-120)+50;
            this.y = getRandomInt(sizeY-120)+50;

            increment_score(main_char)
        }
    }

    draw(score){
        if([4,9,19,49,99,199,299,399,499,999].includes(score)){
            drawImage(coin_reverse_image,this.x,this.y)
        }else{
            drawImage(coin_image,this.x,this.y)
        }
    }
}