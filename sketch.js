let theInput;
let font1;
let checkbox;
let x = 0;
let y = 0;
let userLine;

let writing = [];

let backgroundR = 220;
let backgroundG = 220;
let backgroundB = 220;

function preload(){
font1 = loadFont('ledlight/LEDLIGHT.otf')
}

function setup () {
createCanvas (windowWidth, windowHeight);  
textFont(font1);
textSize(54);
theInput = createInput();
theInput.position(x+200,y+200)
button = createButton('enter');
button.position(x + 348,y + 200);
button.mousePressed(newLine);


let checkbox1 = createCheckbox();
  checkbox1.position(x+400, y+400);
  let span = createSpan('doom');
 span.position(366,400);
  checkbox1.mouseClicked(() => {
    if(checkbox1.checked()) {
      backgroundR=0;
    } else {
      background(220);
    }
  });
  
let checkbox2 = createCheckbox();
  checkbox2.position(x+400, y+420);
  let pan = createSpan('gloom');
   pan.position(361,420);
  checkbox2.mouseClicked(() => {
    if(checkbox2.checked()) {
      backgroundG=125;
    } else {
      background(220);
    }
  });

let checkbox3 = createCheckbox();
  checkbox3.position(x+400, y+440);
  let lpan = createSpan('crab rangoon');
   lpan.position(319,440);
  checkbox3.mousePressed(() => {
    if(checkbox3.checked()) {
      backgroundB=70;
    } else {
      background(220);
    }
    if(checkbox3.unchecked()){
      backgroundB=220;
    }
  });
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
background(backgroundR, backgroundG, backgroundB);
let words = theInput.value();
text(words, 50, 100);
writeThings();

 }

 function newLine(){
userLine = theInput.value();
theInput.value('');
writing.push(userLine);
 }

 function writeThings(){
  for(x = 0; x < writing.length; x++){
    text(writing[x], 40, 180 + x * 40);
  }
 }