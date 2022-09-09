window.onload = init;

var score = 0;

var ctx;
var canvas;
var gaming;

function clear(){
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0,0,canvas.width,canvas.height);
}

function write_score(parscore) {
    document.getElementById("score").innerHTML = "score : "+parscore;
}

function end(){
    ctx.fillStyle = "white";
    ctx.font = '48px serif';
    ctx.fillText('You loose', (canvas.width/2)-120, (canvas.height/2)-50);
    ctx.fillText('Final score : '+ score, (canvas.width/2)-130, (canvas.height/2));
    clearInterval(gaming);
}

function increment_score(main_char){
    score++;
    if(score%200 == 0)
        enemies.push(new ennemie(getRandomInt(4)+4));

    if(score == 5) main_char.setSpeed(5);
    else if(score == 100) main_char.setSpeed(7);
    else if(score == 400) main_char.setSpeed(9);
}

function game(){
    clear();
    write_score(score);

    perso.move();
    perso.draw(score);

    coin.draw(score);
    coin.touch_move_coin(perso,score);

    for (var i=0;i<enemies.length;i++){
        enemies[i].draw();
        enemies[i].move();
        enemies[i].die();
        enemies[i].kill(perso.getX(),perso.getY(),perso.getSize())
    }
}

function init(){
    //getting images
    coin_image = document.getElementById("coin_img");
    coin_reverse_image = document.getElementById("coin_reverse_img");
    ennemy = document.getElementById("ennemy_img");
    caution = document.getElementById("caution");

    //setting the basics for drawing
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    //creating the enemies
    enemies = [new enemy(4,ennemy,caution),new enemy(5,ennemy,caution),new enemy(6,ennemy,caution)];

    //creating the main caracter
    perso = new main_character(canvas.height,canvas.width);
    document.addEventListener('keydown', function(){perso.keydown()});
    document.addEventListener('keyup', function(){perso.keyup()});

    coin = new coin();

    gaming = setInterval(game, 20);
}
