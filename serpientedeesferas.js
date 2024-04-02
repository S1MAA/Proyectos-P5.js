let serpiente = [];
let numSegmentos = 30;
let segmentoLongitud = 20;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < numSegmentos; i++) {
    serpiente[i] = new Segmento(0, 0);
  }
}

function draw() {
  background(0);

  
  for (let i = serpiente.length - 1; i >= 0; i--) {
    if (i === 0) {
      serpiente[i].seguir(mouseX, mouseY);
    } else {
      serpiente[i].seguir(serpiente[i - 1].pos.x, serpiente[i - 1].pos.y);
    }
    serpiente[i].actualizar();
    serpiente[i].mostrar();
  }
}

class Segmento {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
  }

  seguir(xObjetivo, yObjetivo) {
    let objetivo = createVector(xObjetivo, yObjetivo);
    let direccion = p5.Vector.sub(objetivo, this.pos);
    direccion.setMag(segmentoLongitud);
    let posicionDeseada = p5.Vector.sub(objetivo, direccion);
    this.vel = p5.Vector.sub(posicionDeseada, this.pos);
    this.pos.add(this.vel);
  }

  actualizar() {
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }

  mostrar() {
    fill(255);
    stroke(255);
    ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
