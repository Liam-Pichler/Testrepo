

 // VAR


var c;
var ctx;
var end;

var bird;

var sfondo = new Image();
sfondo.src ="bild.png";

var avatar = new Image();
avatar.src ="bird.png";

var tuboUp = new Image();
tuboUp.src = "up.png";

var tuboDown = new Image();
tuboDown.src = "down.png";

class Player{

  constructor(){
    this.x=10;
    this.y=150;
    this.vy=0;
    this.g=0.1;
  }

  show(){
    ctx.drawImage(avatar,this.x,this.y,40,40);
  }

  fly(){
    this.vy=-2;
  }

  gravity(){
    this.y+=this.vy;
    this.vy+=this.g;
  }

}

var tubi = [];

tubi[0] ={
  x:280,
  y:0,
};



  function gameOver(){
    document.getElementById("over").style.visibility="visible";
  }

function update(){
    ctx.drawImage(sfondo,0,0,288,384);

    for(var i=0;i<tubi.length;i++){
      ctx.drawImage(tuboDown,tubi[i].x,tubi[i].y,60,300);
      ctx.drawImage(tuboUp,tubi[i].x,tubi[i].y+360,60,300);
      tubi[i].x--;


      if(tubi[i].x==120){
        tubi.push({x:288,y:Math.floor(Math.random()*200)-200})
      }


      if(bird.x==tubi[i].x && (bird.y>=tubi[i].y && bird.y<=tubi[i].y+300)){
          gameOver();
          clearInterval(end);
          console.log("game over");
      }


    }


    bird.show();
    bird.gravity();

}



 function setup(){
   c = document.getElementById("canvas");
   ctx = c.getContext("2d");

   bird = new Player();

   document.body.addEventListener("keypress",fly =>{
     bird.fly();
     console.log("vola vola volaa");
   });

   end = setInterval("update()",10);

 }
