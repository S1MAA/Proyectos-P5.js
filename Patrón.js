let r = 0; // variable para la rotación parte en 0
let separacion = 40; //variable cada 40 px se crea una forma nueva
let cantidadX = 10;
let cantidadY = 10;
let moduloAncho = 40;
let moduloAlto = 40;
let escala = 1; // variable para la escala del módulo

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  mouseYActual = constrain(mouseY, 100, 255);//
  
  // Reducir la escala al apretar la letra 'a'
  if (keyIsPressed && key === 'a') {
    escala = lerp(escala, 0.5, 0.1); // reducir la escala de forma suave
  } else {
   escala = lerp(escala, 1, 0.1); // volver a la escala original de forma suave
  }
  
  for (let i = 0; i < cantidadX; i++) { // cantidad que se repite en el eje X
    for (let j = 0; j < cantidadY; j++) { //cantidad que se repite en el eje Y
      let x = i * separacion + 20; 
      let y = j * separacion + 20;
      
      //CAMBIOS DE COLOR
      if (mouseX >= x-20 && mouseX < x-20 + moduloAncho && mouseY >= y-20 && mouseY < y + moduloAlto-20) {
        if(mouseY < 200){
            fill(0, 250, 90);//
          } 
          else{
            fill(54, 100, 156);
          }
        
      } else {
          fill(54, mouseYActual, 156);
      }
      
      //FIN CAMBIOS DE COLOR
      //ROTACION CON MOUSE
      push();
      translate(x, y);
      if (mouseIsPressed && mouseButton === LEFT) { // si se mantiene presionado el click izquierdo r aumenta 0,001
        r += 0.001;
      }
      rotate(r);
      scale(escala); // aplicar la escala al módulo
      for (let k = 0; k < 4; k++) {
        push();
        rotate(k * PI / 2 - PI / 4);
        beginShape();
        curveVertex(-10, 0);
        curveVertex(-10, 0);
        curveVertex(-5, -20);
        curveVertex(10, -20);
        curveVertex(5, 0);
        curveVertex(10, 20);
        curveVertex(-5, 20);
        curveVertex(-10, 0);
        curveVertex(-10, 0);
        endShape();
        pop();
      }
      pop();
    }
  }
}

