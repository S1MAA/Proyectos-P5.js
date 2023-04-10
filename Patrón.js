//EL siguiente patrón es en base a un tejido, se puede interacctuar con este moviendo el mouse verticalmente, apretando el click izquierdo y apretando la letra "a"



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
  mouseYActual = constrain(mouseY, 100, 255);//Restricción para que el cambio de color
  
  // REDUCCIÓN DE ESCALA
  if (keyIsPressed && key === 'a') {
    escala = lerp(escala, 0.5, 0.1); // reducir la escala de forma suave
  } else {
   escala = lerp(escala, 1, 0.1); // volver a la escala original de forma suave
  }
  
  //REPETICIÓN DEL MÓDULO 
  for (let i = 0; i < cantidadX; i++) { // cantidad que se repite en el eje X
    for (let j = 0; j < cantidadY; j++) { //cantidad que se repite en el eje Y
      let x = i * separacion + 20; //se le suma 20 para que empieze con la figura completa y no al  mitad
      let y = j * separacion + 20;//se le suma 20 para que empieze con la figura completa y no al  mitad
      
      //CAMBIOS DE COLOR
      //se le resta veinte para volver al centro de la figura
      if (mouseX >= x-20 && mouseX < x-20 + moduloAncho && mouseY >= y-20 && mouseY < y + moduloAlto-20) {//caundo el mouse se encuentre dentro de la figura cambiara de color
        if(mouseY < 200){ // si el mouse se encuntra en la mitad de arriba
            fill(0, 250, 90);//la posición del cursor (mouseY) es inferior a 200 píxeles, se establece el color del módulo en verde
          } 
          else{ // si no (200 y más)
            fill(54, 100, 156);//la posición del cursor (mouseY) es inferior a 200 píxeles, se establece el color del módulo en azul
          }
        
      } else {// sino cuelve a como antes
          fill(54, mouseYActual, 156); // cambio de color del fondo
      }
      
      //ROTACION CON MOUSE
      push();
      translate(x, y);
      if (mouseIsPressed && mouseButton === LEFT) { // si se mantiene presionado el click izquierdo r aumenta 0,001
        r += 0.001;
      }
      //CREACION DEL MÓDULO
      rotate(r);
      scale(escala); // aplicar la escala al módulo
      for (let k = 0; k < 4; k++) {
        push();
        rotate(k * PI / 2 - PI / 4);// la figura esta rotada 4 veces para formar la original
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

