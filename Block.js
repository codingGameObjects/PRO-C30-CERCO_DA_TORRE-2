class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("block.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visiblity = 255
    }
    display(){
        var pos= this.body.position;

        if(this.body.speed <= 3){
            push();
            imageMode(CENTER);
            image(this.image, pos.x,pos.y,this.width, this.height);   
            pop(); 
            
        } else {
 
            World.remove(world, this.body)
            push()
            tint(255, this.Visiblity);
            this.Visiblity = this.Visiblity - 5;
            image(this.image, pos.x,pos.y,this.width, this.height);    
            pop()
        }
    }
}