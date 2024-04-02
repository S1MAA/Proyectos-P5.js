//En este código podemos ver a Naruto practicando el jutsu multiclones de sombra al hacer "click" con el mouse y al apretar la letra a  vuelve a practicar los Rasengan, además al hacer "click" sobre estos Naruto controlará su dirección.

//variables serpiente naruto
let narutoImg; // Variable para cargar la imagen de Naruto
let serpiente = [];
let numSegmentos = 1;
let segmentoLongitud = 20;

//Variables Rasengan
let rasengan1;
let rasengan2;
let rasengan = []


//variable fondo
let img;

function preload() {
  // Carga la imagen de Naruto antes de que se ejecute el programa
  narutoImg = loadImage('https://art.pixilart.com/b78b411106e540b.png');//cargo imagen de naruto
  
 img = loadImage('naruto/fondonarutoo.png'); // cargo imagen del fondo
  
   rasengan1 = loadImage('naruto/rasengan.webp'); // cargo imagen del fondo
    sonido = loadSound('naruto/jutsu.mp4');
}

function setup() {
  createCanvas(800, 600);
 mouseYActual = constrain(mouseY, 100, 255);
  for (let i = 0; i < numSegmentos; i++) {//inicializa un array de objetos numSegmento
    serpiente[i] = new Segmento(0, 0);
  }
  
    for(let i=0;i<50;i++){// for para llamara a la clase
    rasengan[i] = new Rasengan (random(width), random(height), random(10,80), color(29,231,mouseYActual, 70),random(-2,2),random (3,8))
  }
}

function draw() {
  background(img);
  for (let i = serpiente.length - 1; i >= 0; i--) {
    if (i === 0) {
      // Usa la posición del ratón como objetivo para la cabeza de la serpiente
      let objetivo = createVector(mouseX, mouseY);
      let direccion = p5.Vector.sub(objetivo, serpiente[i].pos);
      direccion.setMag(segmentoLongitud);
      let posicionDeseada = p5.Vector.sub(objetivo, direccion);
      serpiente[i].vel = p5.Vector.sub(posicionDeseada, serpiente[i].pos);
    } else {
      // Usa la posición del segmento anterior como objetivo
      let objetivo = serpiente[i - 1].pos;
      let direccion = p5.Vector.sub(objetivo, serpiente[i].pos);
      direccion.setMag(segmentoLongitud);
      let posicionDeseada = p5.Vector.sub(objetivo, direccion);
      serpiente[i].vel = p5.Vector.sub(posicionDeseada, serpiente[i].pos);
    }
    serpiente[i].actualizar();
    serpiente[i].mostrar();
  }

  // Dibuja el nuevo segmento si se ha agregado
  if (numSegmentos > serpiente.length) {
    serpiente.push(new Segmento(serpiente[serpiente.length-1].pos.x, serpiente[serpiente.length-1].pos.y));
  }
    for(let i=0; i < rasengan.length; i++){
  rasengan[i].dibuja();
  rasengan[i].tirita();
  rasengan[i].avanza();
    }
}

function mousePressed() {
  // Agrega un nuevo segmento a la serpiente
  numSegmentos++;
  
   for(let i = 0; i < rasengan.length; i++){
   rasengan[i].cambiaDir();
   rasengan[i].a = !rasengan[i].a
 }
  sonido.play();
}

class Segmento {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
  }

  actualizar() {
    this.pos.add(this.vel);//actualiza la posición del segmento agregando su velocidad actual
    this.pos.x = constrain(this.pos.x, 0, width);
    this.pos.y = constrain(this.pos.y, 0, height);
  }

  mostrar() { // dibuja la imagen de Naruto
    // Dibuja la imagen de Pikachu en lugar de un rectángulo
    image(narutoImg, this.pos.x, this.pos.y, 100, 100);
  }
}

class Rasengan {
  
 constructor(x,y,t,c,v,n,r){
  this.x = x; 
  this.y = y; 
  this.t = t; 
  this.c = c;
  this.v = v;
  this.n = n;
  this.a = false;
  this.colorini = c;
  this.rasengan1 = r;
 }  
  
  dibuja(){
    noStroke();
    fill(this.c);
    for (let i=0; i<this.n; i++){
    image(rasengan1,this.x,this.y,this.t/2,this.t/2)
  }
    }
  
  tirita(){ //random de posición
    this.y += random(-2,2);
  }
  avanza(){ //velocidad de avanzar
   this.x += this.v; 
  }
  
  cambiaDir(){ // cambia la direccion
    if(dist(mouseX,mouseY,this.x,this.y)< this.t/2){
       this.v *= -1;
    }
  
  }

}

function keyPressed() {
  if (key == "a") { //Defino que si se presiona la letra "a" se randomiza
    ran(); 
  }
}

function ran() { //Defino funcion para randomizar 
  for(let i=0;i<50;i++){
    rasengan[i] = new Rasengan (random(width), random(height), random(10,80), color(29,231,random(255),random(70)),random(-2,2),random (3,8))
  }
}



