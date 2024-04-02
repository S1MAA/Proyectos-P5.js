//En este código se verán pokebolas moviéndose de forma aleatoria alrededor de la pantalla, al hacer "click" se reinicia el movimiento.

let npoke = 10;
let angulos = [];
let velocidades = [];
let colores = []


function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  fill(250);
  noStroke();
  

  for ( i = 0; i < npoke; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    colores[i] = [];
    for (let j = 0; j < npoke; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-2,2);
      colores[i][j] = color(random(240),200);
    }
  }
}

function draw() {
  background(0);
  
  
  for (let i = 0; i < angulos.length; i++) {
    for (let j = 0; j < angulos[1].length; j++) {
      //let hue = -100+i*50; 
      //let miColor = color(hue, 100, 100);
      
      angulos[i][j] += velocidades[i][j];
      
      fill(colores[i][j]);
        let distancia = dist(mouseX, mouseY, i * 80, j * 80);
        let dMap = map(distancia, 0, 280, 170, 20);
        //stroke(miColor);
       pokebolas(80 * i, 80*j, angulos[i][j] + velocidades[i][j], dMap);
    }
  }
}

function pokebolas( x,  y,  a) {
  push();
  translate(x, y);
  rotate(radians(a));
    // Círculo exterior blanco
  fill('white');
  strokeWeight(8);
  stroke('black');
  ellipse(width / 2, height / 2, 400);
  
  // Círculo interior rojo
  fill('red');
  stroke('black');
  arc(width / 2, height / 2, 400, 400, PI, PI * 0, CHORD);
  
  // Círculo blanco del medio
  stroke('black');
  fill('white');
  circle(width / 2, height / 2, 100);
  
  // Círculo blanco interno
  strokeWeight(2);
  stroke('black');
  fill('white');
  circle(width / 2, height / 2, 70);
  
  // Punto negro del medio
  fill('black');
  circle(width / 2, height / 2, 30);

  pop();
}


function mouseClicked(){
 randomizar();
  
}

function randomizar(){
  for (let i = 0; i < npoke; i++) {
    angulos[i] = [];
    velocidades[i] = [];
    for (let j = 0; j < npoke; j++) {
      angulos[i][j] = 90 + random(-10, 10);
      velocidades[i][j] = random(-0.5,0.5);
    }
  }
}
