class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          
      }
      this.body = Bodies.circle(x,y,raduis,options);
      this.x= x;
      this.y= y;
      this.raduis=raduis;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      ellipse(pos.x, pos.y, this.raduis, this.raduis);
    }
  };
