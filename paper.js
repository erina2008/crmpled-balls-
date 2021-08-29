class paper{
constructor(x,y,r){
var options={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}
this.x = x;
this.y = y;
this.r = r;
this.image= loadImage("paper.png");
this.body=Bodies.circle(x, y, (this.r-40)/2, options);
World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(4);
			stroke("black");
			fill("white");
			//ellipse( 0, 0, this.r, this.r);
            image(this.image, 800,400,100, 100);
			pop()
	}

    



     } 














