var bg;

function preload() {
  bg = loadImage("background.jpg");
  manImg = loadImage("fisshermaan.png");
  blueFish = loadImage("blueFish.png");
  fish1Img = loadImage("Fish01_B.png");
  fish2Img = loadImage("Fish03_A.png");
  fish3Img = loadImage("Fish04_A.png");

  bottle1 = loadImage("bottle1.png");
  bottle2 = loadImage("bottle2.png")
  apple = loadImage("apple.png");
  shoe = loadImage("shoe.png");
  tyre = loadImage("tyre.png");
  net = loadImage("net.png");
  garbageBag = loadImage("garbagebag.png");
}



function setup() {
  createCanvas(800,400);
  man = createSprite(150,100,200,100);
  man.addImage(manImg);
  
}

function draw() {
  background(bg); 
  
 if(keyDown(RIGHT_ARROW)){
   man.x = man.x+2
 }

 if(keyDown(LEFT_ARROW)){
   man.x = man.x-2
 }


  spawnFishes();
  
  spawnGarbage();

  drawSprites();
}

function spawnFishes(){
  if(frameCount%100===0){
fish = createSprite(800,random(150,350));
fish.velocityX = -5;
var rand = Math.round(random(1,4));
switch(rand){
  case 1: fish.addImage(blueFish);
  break;
  case 2: fish.addImage(fish1Img);
  break;
  case 3: fish.addImage(fish2Img);
  break;
  case 4: fish.addImage(fish3Img);
  break;
  default:break;
}

fish.scale = 0.1;
  }

}
function spawnGarbage(){
  if(frameCount%230===0){
    garbage = createSprite(800,random(200,350));
    garbage.velocityX = -5;
    var rand = Math.round(random(1,7));
    switch(rand){
      case 1: garbage.addImage(bottle1);
      break;
      case 2: garbage.addImage(bottle2);
      break;
      case 3: garbage.addImage(apple);
      break;
      case 4: garbage.addImage(shoe);
      break;
      case 5: garbage.addImage(tyre);
      break;
      case 6: garbage.addImage(net);
      break;
      case 7: garbage.addImage(garbageBag);
      break;
      default:break;
    }
    garbage.scale = 0.5
  }
}