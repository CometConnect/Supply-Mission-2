var helicopterIMG , helicopterSprite , packageSprite , packageIMG ;
var packageBody , ground ;
var brick1 , brick2 , brick3 ;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




function preload()
{
	helicopterIMG=loadImage( "helicopter.png" )
	packageIMG=loadImage( "package.png" )
}




function setup() 
{


	createCanvas( 800, 700 );
	rectMode( CENTER );
	

	packageSprite=createSprite( width/2, 80, 10,10 );
	packageSprite.addImage( packageIMG )
	packageSprite.scale=0.2;

	helicopterSprite=createSprite( width/2, 200, 10,10 );
	helicopterSprite.addImage( helicopterIMG )
	helicopterSprite.scale=0.6;

	groundSprite=createSprite( width/2, height-35, width,10 );
	groundSprite.shapeColor=color( 255 )


	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle( width/2 , 200 , 5 , 
		{
			restitution:0.3, 
			isStatic:true
		}
		);

	World.add( world , packageBody );
	

	//Create a Ground
	ground = Bodies.rectangle( width/2 , 650 , width , 10 , 
		{
			isStatic:true
		} 
		);

	 World.add( world, ground );
	 
	brick1 = new bricks( 300 , 600 , 20 , 100 , 0, true );
	brick2 = new bricks( 400 , 640 , 200, 55 , 0 , true );
	brick3 = new bricks( 500,  600 , 20, 100, 0 , true );

	Engine.run( engine );
  

}




function draw() 
{
  rectMode( CENTER );
  background( 0 );
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  drawSprites();
  brick1.display(20 , 100);
  brick2.display(200, 20);
  brick3.display(20, 100);
  Engine.update(engine);
}




function keyPressed() 
{
	if( keyCode===DOWN_ARROW )
	{
		Matter.Body.setStatic(packageBody, false);
	}
}



