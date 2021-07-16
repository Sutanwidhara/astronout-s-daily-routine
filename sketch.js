var astronout;


function preload() {
  bg=loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png","gym11.png","gym12.png");
  eat = loadAnimation("eat1.png","eat2.png");
  drink = loadAnimation("drink1.png","drink2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  m = loadAnimation("m1.png","m2.png");
}
function setup() {
  createCanvas(800,700);

  astronout = createSprite(400,400);
  astronout.addAnimation("sleeping",sleep);
  astronout.scale = 0.1 ;
}

function draw() 
{
  background(bg);
  drawSprites();

  textSize(20);
  fill("White");
  text("Instructions:",20,20);
  
  text("r = brushing",20,50);
  text("d = eating",20,80);
  text("i = gyming",20,110);
  text("p = drinking",20,140);
  text("a = moving",20,170);
  text("n = bathing",20,200);

  if(keyDown("r")){
    astronout.addAnimation("brushing",brush);
   astronout.changeAnimation("brushing");
    
  }

  if(keyDown("d")){
    astronout.addAnimation("eating",eat);
    astronout.changeAnimation("eating");
  }

  if(keyDown("i")){
    astronout.addAnimation("gyming",gym);
    astronout.changeAnimation("gyming");

  }
  if(keyDown("p")){
    astronout.addAnimation("drinking",drink);
    astronout.changeAnimation("drinking");
  }
  
  if(keyDown("a")){
    astronout.addAnimation("moving",m);
    astronout.changeAnimation("moving");

  }
  
  
  
  if(keyDown("n")){
    astronout.addAnimation("bathing",bath);
    astronout.changeAnimation("bathing");
  }


  
}

