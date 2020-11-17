
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint


function preload(){
boyImage=loadImage("images/boy.png")
treeImage=loadImage("images/tree.png")

}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(650,700,1300,20,)

  mango1 = new Mango(850,300,30)
  mango2 = new Mango(900,380,40)
  mango3 = new Mango(700,350,60)
  mango4 = new Mango(750,400,35)
  mango5 = new Mango(950,350,50)


  stone = new Stone(170,550,30)


slingshot = new Slingshot(stone.body,{x:160,y:620})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 image(boyImage,200,650,150,150)
 image(treeImage,830,450,500,500)
ground.display()
mango1.display()
mango5.display()
mango4.display()
mango3.display()
mango2.display()
stone.display()
slingshot.display()
 
detectollision(stone,mango1)
detectollision(stone,mango5)
detectollision(stone,mango4)
detectollision(stone,mango3)
detectollision(stone,mango2)
}


function detectollision(lstone,lmango){
	 mangoBodyPosition=lmango.body.position
	  stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
	if(distance<=lmango.radius+lstone.radius) {
		 Matter.Body.setStatic(lmango.body,false); 
		}
		 }


		 function mouseDragged() {
			  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
			 }
			 
			 function mouseReleased() {
				  slingshot.fly();
			  } 
			  
			  function keyPressed() {
				   if (keyCode === 32) { slingshot.attach(stone.body); 
				} 
			
			}
