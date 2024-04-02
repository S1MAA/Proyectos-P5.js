let numpikachus = 60;

let pixelSize =15; // Tamaño de cada píxel en el lienzo

// Matriz que representa el diseño de Pikachu en Pixel Art
let pikachuPixels = [
  '000000000000000000000',
  '000200000000022000000',
  '002120000000022200000',
  '021112000000021200000',
  '021111222000021120000',
  '002111222220021120000',
  '000211122112211112000',
  '000021122111111111200',
  '000211202111111111420',
  '000212002111111111220',
  '000021221111124111120',
  '000002221113322111200',
  '000000222111311112000',
  '000000211111111111200',
  '000000221121111122000',
  '000000211112111120000',
  '000000211121111212000',
  '000000021111122222000',
  '000000022122200000000',
  '000000021112000000000',
  '000000002220000000000',
  '000000000000000000000'
];

function setup() {
  createCanvas(400, 400);
  noStroke();
}
let val = 0;


function draw() {
  background(255);
  drawPikachu(val);
  
  
}


function keyPressed() {
  if (key === 'a') {
 val++;
  }
    if (key === 's' ){
    pixelSize++;
      }
      if (key === 'd' ){
    pixelSize--;
      }
}

function drawPikachu(val) {
  for (let i = 0; i < pikachuPixels.length; i++) {
    for (let j = 0; j < pikachuPixels[i].length; j++) {
      let pixel = pikachuPixels[i][j];

      if(val % 5 == 0) {
        
      // Elige el color en función del número en la matriz
      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(247, 255, 78); // Amarillo
          break;
        case '2':
          fill(0, 0, 0); // Negro
          break;
        case '3':
          fill(255, 0, 0); // Rojo
          break;
          case '4':
          fill(255); // Blanco
          break;
      }
      }
            else if(val % 5 == 2) {
        
      // Elige el color en función del número en la matriz
      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(255, 195, 251); // Rosado
          break;
        case '2':
          fill(0, 0, 0); // Negro
          break;
        case '3':
          fill(255, 0, 0); // Rojo
          break;
          case '4':
          fill(255); // Blanco
          break;
      }
      }
          else if(val % 5 == 1) {
        
      // Elige el color en función del número en la matriz
      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(78, 255, 188); // celeste
          break;
        case '2':
          fill(0, 0, 0); // Negro
          break;
        case '3':
          fill(255, 0, 0); // Rojo
          break;
          case '4':
          fill(255); // Blanco
          break;
      }
      }
             else if(val % 5 == 3) {
        
      // Elige el color en función del número en la matriz
      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(195, 123, 255); // Morado
          break;
        case '2':
          fill(0, 0, 0); // Negro
          break;
        case '3':
          fill(255, 0, 0); // Rojo
          break;
          case '4':
          fill(255); // Blanco
          break;
      }
      }
             else{
        
      // Elige el color en función del número en la matriz
      switch (pixel) {
        case '0':
          fill(255, 255, 255, 0); // Transparente
          break;
        case '1':
          fill(255, 185, 123); // Amarillo
          break;
        case '2':
          fill(0, 0, 0); // Negro
          break;
        case '3':
          fill(255, 0, 0); // Rojo
          break;
          case '4':
          fill(255); // Blanco
          break;
      }
      }
      // Dibuja el píxel como un rectángulo
      rect(j * pixelSize, i * pixelSize, pixelSize, pixelSize);
        
    }
  }
}
