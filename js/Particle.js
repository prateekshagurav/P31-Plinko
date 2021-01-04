class Particle{
    constructor(x,y,radius) {
      var options = {
         
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.color = color(random(0,255),random(0,255),random(0,255))
      this.d= radius * 2;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill(this.color);
      noStroke();
      ellipse(pos.x, pos.y, this.d, this.d);
    }
  };
