window.onload = init;

//---- personnage
var x = 250;
var y = 250;
var size = 25;

var vecposx = 0;
var vecposy = 0;
var vecnegx = 0;
var vecnegy = 0;

var speed = 3;

//---- other

var boxSize = 0;

//---- coin

var coinx = getRandomInt(780);
var coiny = getRandomInt(780)+boxSize;
var coinsize = 20;

var score = 0;

var ctx;
var canva;
var gaming;

ennemies = [new ennemie(4),new ennemie(5),new ennemie(6)];

function draw_perso(parx,pary,parsize){
    if(score < 5) drawcube(parx,pary,parsize,"black");
    else if(score < 10) drawcube(parx,pary,parsize,"blue");
    else if(score < 20) drawcube(parx,pary,parsize,"purple");
    else if(score < 50) drawcube(parx,pary,parsize,"red");
    else if(score < 100) drawcircle(parx,pary,parsize,"blue");
    else if(score < 200) drawcircle(parx,pary,parsize,"purple");
    else if(score < 300) drawcircle(parx,pary,parsize,"red");
    else if(score < 400) drawStar(parx,pary,parsize,"blue");
    else if(score < 500) drawStar(parx,pary,parsize,"purple");
    else if(score < 1000) drawStar(parx,pary,parsize,"red");
    else drawStar(parx,pary,parsize,"black");
}

function draw_coin(parx,pary,parsize){
    if([4,9,19,49,99,199,299,399,499,999].includes(score)){
        drawcircle(parx,pary,parsize,"orange");
    }else{
        drawcircle(parx,pary,parsize,"yellow");
    }
}

function clear(){
    ctx.fillStyle = "darkgray";
    ctx.fillRect(0,boxSize,canvas.width,canvas.height);
}

function write_score(parscore) {
    document.getElementById("score").innerHTML = "score : "+parscore;
}

function touch_move_coin(){
    if (x < coinx + coinsize && x + size > coinx && y < coiny + coinsize && size + y > coiny) {
        score++;
        ctx.fillStyle = "gray";
        ctx.fillRect(0,0,canvas.width,boxSize);
        write_score(score);

        drawcube(coinx,coiny,coinsize,"darkgrey");

        coinx = getRandomInt(780);
        coiny = getRandomInt(780)+boxSize;
        draw_coin(coinx,coiny,coinsize);

        if(score == 5) speed=5;
        else if(score == 100) speed=7;
        else if(score == 400) speed=9;
        
        if(score%100 == 0){
            ennemies.push(new ennemie(getRandomInt(4)+4))
        }
    }
}

function move(){
    if(vecnegx && vecposx){
    }else if(x-speed >= 0 && vecnegx){
        x += vecnegx;
    }else if(x+size+speed <=canvas.width && vecposx){
        x += vecposx;
    }

    if(vecnegy && vecposy){
    }else if(y-speed >= boxSize && vecnegy){
        y += vecnegy;
    }else if(y+size+speed <= canvas.height && vecposy){
        y += vecposy;
    }
}

function end(){
    ctx.fillStyle = "white";
    ctx.font = '48px serif';
    ctx.fillText('You loose', (canvas.width/2)-120, (canvas.height/2)-50);
    ctx.fillText('Final score : '+ score, (canvas.width/2)-130, (canvas.height/2));
    clearInterval(gaming);
}

function game(){
    clear();
    move();
    draw_perso(x,y,size);
    draw_coin(coinx,coiny,coinsize);
    write_score(score);
    touch_move_coin();
    for (var i=0;i<ennemies.length;i++){
        ennemies[i].draw();
        ennemies[i].move();
        ennemies[i].die();
        ennemies[i].kill(x,y,size)
    }
}

function init(){
    canva = document.getElementById("canvas");
    ctx = canvas.getContext('2d');

    gaming = setInterval(game, 20);
}