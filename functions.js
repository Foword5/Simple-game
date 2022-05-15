function keydown(input){
    e = input || window.event;
    e = e.keyCode;
    if(e == 90){
        vecnegy = -speed;
    }else if(e == 83){
        vecposy = speed;
    }
    if(e == 81 ){
        vecnegx = -speed;
    }else if(e == 68){
        vecposx = speed;
    }
}

function keyup(input){
    e = input || window.event;
    e = e.keyCode;
    if(e == 90){
        vecnegy = 0;
    }else if(e == 83){
        vecposy = 0;
    }
    if(e == 81 ){
        vecnegx = 0;
    }else if(e == 68){
        vecposx = 0;
    }
}

function drawImage(image,parx,pary){
    ctx.drawImage(image,parx,pary)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function drawcube(parx,pary,parsize,color){
    ctx.fillStyle = color;
    ctx.fillRect(parx,pary,parsize,parsize);
}

function drawcircle(parx,pary,parsize,color){
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc(parx+parsize/2, pary+parsize/2, parsize/2, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
}

function drawStar(parx,pary,size,color){
    var parx = parx+size/2;
    var pary = pary+size/2;
    var rot=Math.PI/2*3;
    var x=parx;
    var y=pary;
    var step=Math.PI/5;

    ctx.beginPath();
    ctx.moveTo(parx,pary-(size*0.5))
    for(i=0;i<5;i++){
        x=parx+Math.cos(rot)*(size*0.5);
        y=pary+Math.sin(rot)*(size*0.5);
        ctx.lineTo(x,y)
        rot+=step

        x=parx+Math.cos(rot)*(size*0.2);
        y=pary+Math.sin(rot)*(size*0.2);
        ctx.lineTo(x,y)
        rot+=step
    }
    ctx.lineTo(parx,pary-(size*0.5));
    ctx.closePath();
    ctx.strokeStyle=color;
    ctx.stroke();
    ctx.fillStyle=color;
    ctx.fill();
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}