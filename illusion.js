function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  //background(0,40);
  background(0,20);
  

  let angulo = frameCount * 3;
  let origenX = width/2
  let origenY = height/2
    let educacion = 30
  
    let oscX = sin (angulo);
    let oscY = cos(angulo);
    noStroke();
      fill(255);
  
      circle(origenX+ oscY * 80,origenY + oscX * 50,educacion);
      //circle(origenX+ oscY * 30,origenY + oscX * 100,educacion);
      //circle(origenX+ oscY * 55,origenY + oscX * 75,educacion);
    
       
      circle(origenX+ oscY * -80,origenY + oscX * -50,educacion);
      circle(origenX+ oscY * -30,origenY + oscX * -100,educacion);
      //circle(origenX+ oscY * -55,origenY + oscX * -75,educacion);
  
  fill(0,100,255)
      circle(origenX+  oscX * 80,origenY + oscY * 50,educacion);
      circle(origenX+ oscX * 30,origenY + oscY * 100,educacion);
      //circle(origenX+ oscX * 55,origenY + oscY * 75,educacion);
    
      circle(origenX+ oscX * -80,origenY + oscY * -50,educacion);
      circle(origenX+ oscX * -30,origenY + oscY * -100,educacion);
      //circle(origenX+ oscX * -55,origenY + oscY * -75,educacion);
  }



