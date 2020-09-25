class Paper {
    constructor(x,y,raduis) {
      var options = {
          isStatic: true,
          restitution:0.3,
          friction:0.5,
          density:1.2
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
