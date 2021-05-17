class Drop { 
    constructor(x,y) {
       
        this.body = Bodies.circle(x,y,5);
        this.radius = 5;

        World.add(world, this.body);


    }
display() {
    var pos = this.body.position; 
  // circMode(CENTER);  
    fill("blue");
    circle(pos.x, pos.y, this.radius);
    

}  

}