var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");

var grid=new Image();
grid.src="img/grid.png";


document.addEventListener('keydown', event=>{

    switch(event.keyCode){

        case 37: //left 
        moveLeft();
        draw();
        
        break;

        case 38: //up
        moveUp();
        draw();
        break;

        case 39: //right
        moveRight();
        draw();
        break;

        case 40: //down
        moveDown();
        draw();
        break;
        
    }


})


var xc=Math.floor(Math.random()*4);
var yc=Math.floor(Math.random()*4);

var xc2=Math.floor(Math.random()*4);
var yc2=Math.floor(Math.random()*4);
var number="2";

function draw(){

   
    var coord =[75,225,375,525];
    ctx.drawImage(grid, 0,0,600,600);
    ctx.font = "50px Comic Sans MS";
ctx.fillStyle = "red";
//centering elements

if(xc==xc2 && yc==yc2){

    ctx.fillText(String(Number(number)*2), coord[xc],coord[yc]);

}
else{

ctx.fillText(number, coord[xc],coord[yc]);
ctx.fillText(number, coord[xc2],coord[yc2]);

}

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


function moveLeft(){

    if( xc!=0 ){

    xc-=1;
  
    }
    if(xc2!=0 ){

        xc2-=1;
      
        }

}

function moveRight(){

    if( xc!=3 ){

    xc+=1;
  
    }
    if(xc2!=3 ){

        xc2+=1;
      
        }

}

function moveDown(){

    if( yc!=3 ){

    yc+=1;
  
    }
    if(yc2!=3 ){

        yc2+=1;
      
        }

}


