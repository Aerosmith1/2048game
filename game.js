var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");

var grid=new Image();
grid.src="img/grid.png";


document.addEventListener('keydown', event=>{

    switch(event.keyCode){

        case 37: //left 
        moveLeft();
        
        break;

        case 38: //up
        moveUp();
        draw();
        break;

        case 39: //right
        game.moveRight();
        break;

        case 40: //down
        game.moveDown();
        break;
        
    }


})


var xc=Math.floor(Math.random()*4);
var yc=Math.floor(Math.random()*4);

var xc2=Math.floor(Math.random()*4);
var yc2=Math.floor(Math.random()*4);

function draw(){
    var coord =[75,225,375,525];
    ctx.drawImage(grid, 0,0,600,600);
    ctx.font = "50px Comic Sans MS";
ctx.fillStyle = "red";
//centering elements



ctx.fillText("2", coord[xc],coord[yc]);
ctx.fillText("2", coord[xc2],coord[yc2]);

}

grid.onload=draw;





function moveUp(){

    if( yc!=0 ){

    yc-=1;
  
    }
    if(yc2!=0 ){

        yc2-=1;
      
        }

}

