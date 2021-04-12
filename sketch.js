var bgImg,boy,boyImg,sun,sunImg,virus,virus1,virus2,virus3,virus4,virus5,bomb,bombImg,chomper,chomperImg,shooter,
shooterImg,shooter2,shooter2Img,pumpkin,pumpkinImg,flower,flowerImg,plant,plantImg
var bg



function preload(){
bgImg=loadImage("background.png")
boyImg=loadImage("boy.png")
sunImg=loadImage("sun.png")
virus1=loadImage("virus 1.png")
virus2=loadImage("virus 2.png")
virus3=loadImage("virus 3.png")
virus4=loadImage("virus 4.png")
virus5=loadImage("virus 5.png")
bombImg=loadImage("cherry bomb.png")
chomperImg=loadImage("chomper.png")
shooterImg=loadImage("peashooter.png")
shooter2Img=loadImage("snow peashooter.png")
pumpkinImg=loadImage("pumpkin.png")
flowerImg=loadImage("sunflower.png")
plantImg=loadImage("threepeater.png")
}
function setup() {
  createCanvas(1350,650);
 bg=createSprite(750, 600, 2000, 100);
 bg.shapeColor="green"
boy=createSprite(40,115,10,10)
boy.addImage(boyImg)
boy.scale=0.09
  
}


function draw() {
  background("skyblue");  
  spawnVirus();
  drawSprites();
  textSize(20)
  fill ("black")
  text(mouseX+","+mouseY,mouseX,mouseY);
}
function spawnVirus() {
  if(frameCount % 60 === 0) {
    var virus = createSprite(1219,73,10,10);
    //obstacle.debug = true;
    virus.velocityX = -(6);
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: virus.addImage(virus1);
              break;
      case 2: virus.addImage(virus2);
              break;
      case 3: virus.addImage(virus3);
              break;
      case 4: virus.addImage(virus4);
              break;
      case 5: virus.addImage(virus5);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    virus.scale = 0.09;
   }
}
