const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground, divisions= [], plinkos=[], particles=[]

function setup() {
  var canvas = createCanvas(500,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width,height,10); //width and height of canvas

  //divisionBottom = new Division(width/2,height-5,width,10);
  for(var i=0,x=0;x<=width;i++, x+=50){
    divisions[i] = new Division(x,height-100,10,200);
  }
 
  for(var y=50,x=20; y<400; y+=50){
    if(x== width)
    x=30;
    else
    x=20;
    for(; x< width; x+=30){
      plinkos.push(new Plinko(x,y,5));
    }
  }

  Engine.run(engine);
}

function draw() {
  background("black");
  if(frameCount%30 == 0){
    particle= new Particle(random(20,width),20,7);
  particles.push(particle);
  }
  ground.display();
  for(var i=0; i<=10 ; i++){
    divisions[i].display();
  }
  for(i=0;i<plinkos.length;i++){
    plinkos[i].display();
  }
  for(i=0;i<particles.length;i++){
    particles[i].display();
  }
 

  drawSprites();
}