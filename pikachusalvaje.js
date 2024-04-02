//Esta es una composición de un Pikachu salvaje que intenta escapar de las pokebolas que lo intentan atrapar, en esta se puede interactuar haciendo "Click" con el mouse emite un sonido pikachu, con la letra "a" cambia de color, con la "w" gira en 90 grados hacía la derecha, por último con la letra "s" se agranda y con la letra "d" disminuye su tamaño.

//VARIABLES FONDO Y SONIDO
let img;
let  pikaSound;

//VARIABLES POKEBOLAS
let cpoke = 20; // variable de cantidad de pokebolas girando
let signos_de_giro=[];
let angulo_inicial=[];
let posicionY=[];
let posicionX=[];
let colores_pokebola=["#FF0000","#6058FF","#FF11FF","#B269FF","#FEF22F"]
let color_inicial_pokebola="#FF0000";

//VARIABLES PIKACHU
let colores_pikachu=["#FBEF2B","#8EFFF3","#FFABFF","#CCABFF","#F3A750"]
let color_inicial_pikachu="#FBEF2B";
let numpikachus = 60;
let pixelSize = 10; // Tamaño de cada píxel del pikachu
let angulo_pikachu=0; //angulo inicial del pikachu

// Matriz que representa el diseño de Pikachu en Pixel Art
let pikachuPixels = [
  '0000000000000000000000',
  '0000200000000022000000',
  '0002120000000022200000',
  '0021112000000021200000',
  '0021111222000021120000',
  '0002111222220021120000',
  '0000211122112211112000',
  '0000021122111111111200',
  '0000211202111111111420',
  '0000212002111111111220',
  '0000021221111124111120',
  '0000002221113322111200',
  '0000000222111311112000',
  '0000000211111111111200',
  '0000000221121111122000',
  '0000000211112111120000',
  '0000000211121111212000',
  '0000000021111122222000',
  '0000000022122200000000',
  '0000000021112000000000',
  '0000000002220000000000',
  '00000000000000000000000'
];

function preload() {
  img = loadImage('assets/pikachufondo.png');
  pikaSound = loadSound('assets/Pikachu-WhatsApp.mp3');
}

function setup() {
  createCanvas(800,800);
  for ( i = 0; i < cpoke; i++) {//ciclo en el que i parte igual a 0 y se vuelve a ejecutar si i es menor que cpoke
    signos_de_giro[i]= random(-1,1);// Se usan numeros positivos y negativos para que el movimiento varíe para el lado en el que gire
    angulo_inicial[i] = random(0,360);//Delimita el angulo con el que parte
    posicionY[i] = random(0,height);//Delimita posicion Y con el que parte cada pokebola
    posicionX[i] = random(0,width);//Delimita posicion X con el que parte cada pokebola
  }
  noStroke()
}

function draw() {
  background(img); // Se llama a la variable de la imagen
  pokebolas(cpoke);// se llama a la función de pokebolas
  drawPikachu(); // se llama a la función de pikachu
}

function pokebolas(c){
  for (i = 0; i < c; i++ ){//ciclo que ejecuta la cantidad de pokebolas
    pokebola(i,posicionX[i],posicionY[i],signos_de_giro[i]);
  }
}

function pokebola(i,posicionX,posicionY,signo){
    push();
    translate(posicionX,posicionY); //origen del eje de las pokebolas
    angulo_inicial[i]+=0.1//angulo inicial se divide i/10 para que parta en 1
    rotate (signo*angulo_inicial[i]);//Para que la rotación se ejecute de manera random se útiliza signo que permitira que giren hacía ambos lados
    let movX = constrain(mouseX, 0, width/2);//se delimita el recorrido del mouse
    let movY = constrain(mouseY, 0, height/2);//se delimita el recorrido del mouse
    noStroke();
    fill(colores_pokebola[0]);//primer color del arreglo
    rect(100 + movX ,20+movY,160,80);
    rect(80+movX,60+movY,200,80); 
    fill(255);
    rect(100+movX,160+movY,160,60);
    rect(80+movX,140+movY,20,20);
    rect(260+movX,140+movY,20,20);
    rect(160+movX,100+movY,40,60);
    fill(0);
    rect(140+movX,0+movY,80,20);
    rect(100+movX,20+movY,40,20);
    rect(220+movX,20+movY,40,20);
    rect(260+movX,40+movY,20,40);
    rect(80+movX,40+movY,20,40);
    rect(60+movX,80+movY,20,80);
    rect(280+movX,80+movY,20,80);
    rect(80+movX,160+movY,20,40);
    rect(260+movX,160+movY,20,40);
    rect(220+movX,200+movY,40,20);
    rect(100+movX,200+movY,40,20);
    rect(140+movX,220+movY,80,20);
    rect(100+movX,140+movY,40,20);
    rect(220+movX,140+movY,40,20);
    rect(260+movX,120+movY,20,20);
    rect(80+movX,120+movY,20,20);
    rect(140+movX,120+movY,20,40);
    rect(200+movX,120+movY,20,40);
    rect(160+movX,100+movY,40,20);
    rect(160+movX,160+movY,40,20);
    pop();
}

function drawPikachu() {
  translate(mouseX,mouseY)//El eje de la rotación es desde la posición del mouse
  rotate(angulo_pikachu)
  
  for (let i = 0; i < pikachuPixels.length; i++) {//Se asigna iun valor i=0 y el bucle se dentendra cuando i sea mayor al número de filas de la matriz
    for (let j = 0; j < pikachuPixels[i].length; j++) {//Se asigna iun valor j=0 y el bucle se dentendra cuando j sea mayor al número de filas de la matriz
      let pixel = pikachuPixels[i][j];

      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(colores_pikachu[0]); // Color cuerpo primer color del arreglo
          break;
        case '2':
          fill(0, 0, 0); // Contorno negro
          break;
        case '3':
          fill(255, 0, 0); // Mejilla roja
          break;
        case '4':
          fill(255); // Blanco ojos
          break;
      }
      // Dibuja el píxel como un rectángulo
      rect(-140+j * pixelSize,-120+i * pixelSize, pixelSize, pixelSize);
        
    }
  }
}

//FUNCIONES ASOCIADAS A LA INTERACCION CON EL MOUSE
function mousePressed() {
  if (mouseButton === LEFT) {//Si el boton izquierdo esta presionado pikaSound se ejecuta
    pikaSound.play();
  }
}

function keyPressed() {
  if (key === 'a') {
    temp_pokebola=colores_pokebola.shift();//Saca y obtiene el ultimo valor del arreglo
    color_inicial_pokebola=temp_pokebola;
    colores_pokebola.push(temp_pokebola);//Ingresa al arreglo el valor sacado anteriormente
    temp_pikachu=colores_pikachu.shift();//Saca y obtiene el ultimo valor del arreglo
    color_inicial_pikachu=temp_pikachu;
    colores_pikachu.push(temp_pikachu);//Ingresa al arreglo el valor sacado anteriormente
  }
  else if (key === 's' ){
    pixelSize++; //Agranda tamaño pixel
  }
  else if (key === 'd' ){
    pixelSize--;//Achica tamaño pixel
      }
  else if (key === 'w' ){
    angulo_pikachu+=PI/2;//Giro de pikachu
      }
}
