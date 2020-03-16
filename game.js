
var map=[[0,0,0,0],
         [0,0,0,0],
         [0,0,0,0],
         [0,0,0,0]];

var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");

var grid=new Image();
grid.src="img/grid.png";


document.addEventListener('keydown', event=>{

    switch(event.keyCode){

        case 37: //left 
        moveLeft();
        draw(true);
        
        break;

        case 38: //up
        moveUp();
        draw(true);
        break;

        case 39: //right
        moveRight();
        draw(true);
        break;

        case 40: //down
        moveDown();
        draw(true);
        break;
        
    }


})


var xc=Math.floor(Math.random()*4);
var yc=Math.floor(Math.random()*4);

var xc2=Math.floor(Math.random()*4);
var yc2=Math.floor(Math.random()*4);


var xc3=Math.floor(Math.random()*4);
var yc3=Math.floor(Math.random()*4);

var number="2";

var coord =[75,225,375,525];

function draw(moved){

   


  
    ctx.drawImage(grid, 0,0,600,600);

    

    ctx.font = "70px Comic Sans MS";
ctx.fillStyle = "#9ea7a8";
ctx.fillText(number, coord[xc],coord[yc]);
map[yc][xc]=2;

ctx.fillText(number, coord[xc2],coord[yc2]);
map[yc2][xc2]=2;


if(moved==true){
     
    

    ctx.fillText(number, coord[xc3],coord[yc3]);
    map[yc3][xc3]=2;
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


    if(yc3!=0 ){

     yc3-=1;
          
    }


 
    ifInTheSamePlace(-1,0);

        reset(-1,0);

}
function moveLeft(){

    

    if( xc!=0 ){

    xc-=1;
  
    }
    if(xc2!=0 ){

        xc2-=1;
      
        }

    if(xc3!=0 ){

     xc3-=1;
          
      } 
      

   
      ifInTheSamePlace(0,-1);

        reset(0,-1);
      

}

function moveRight(){

    if( xc!=3 ){

    xc+=1;
  
    }
    if(xc2!=3 ){

        xc2+=1;
      
        }

    if(xc3!=3 ){

     xc3+=1;
          
    }

   
    ifInTheSamePlace(0,1);

        reset(0,1);
    

}

function moveDown(){


    if( yc!=3 ){

    yc+=1;
  
    }
    if(yc2!=3 ){

        yc2+=1;
      
        }
    if(yc3!=3 ){

    yc3+=1;
          
    }

    
    ifInTheSamePlace(1,0);
    
    reset(1,0);

}


function ifInTheSamePlace(stepyc,stepxc){


    if(xc==xc2 && yc==yc2){

        if(map[yc-stepyc][xc-stepxc]==map[yc2-stepyc][xc2-stepxc]){

                map[yc][xc]=map[yc][xc]*2;
                ctx.fillText(String(map[yc][xc]), coord[xc],coord[yc]);
                

        }

    }

    if(xc==xc3  && yc==yc3){

        if(map[yc-stepyc][xc-stepxc]==map[yc3-stepyc][xc3-stepxc]){

            map[yc][xc]=map[yc][xc]*2;
            ctx.fillText(String(map[yc][xc]), coord[xc],coord[yc]);

    }

    }


    if(xc2==xc3  && yc2==yc3){

        if(map[yc2-stepyc][xc2-stepxc]==map[yc3-stepyc][xc3-stepxc]){

            map[yc2][xc2]=map[yc2][xc2]*2;
            ctx.fillText(String(map[yc2][xc2]), coord[xc2],coord[yc2]);

    }

    }

}


function reset(stepyc,stepxc){

    map[yc-stepyc][xc-stepxc]=0;
    map[yc2-stepyc][xc2-stepxc]=0;
    map[yc3-stepyc][xc3-stepxc]=0;


}


