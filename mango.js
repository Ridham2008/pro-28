class Mango {
    constructor(x, y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.circle(x, y, r,options);
      this.radius=r
      this.image=loadImage("images/mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255);
      strokeWeight(4)
      stroke("green")
      image(this.image,pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };