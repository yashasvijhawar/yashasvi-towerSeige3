class Box {
    constructor(x, y){
      var options={
       friction:0.8,
       restitution:0.4,
       density:0.5
      }
      this.body = Bodies.rectangle(x,y,40,50,options);
      this.width = 40;
      this.height = 50;

      World.add(world,this.body);
      this.Visibility = 255;

    }
  
    display(){
      console.log(this.body.speed);
      if(this.body.speed<11){
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
      }
  
      else{
        World.remove(world,this.body);
        push();
        this.Visibility = this.Visibility-5;
        tint(255,this.Visibility);
        //image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();
      }
    }

    score(){
      if(this.Visiblity<0 && this.Visiblity>-1005){
        score++;
      }
    }
      
  };