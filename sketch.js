let theInput;
let img;
let photos = [];
let p1, p2, p3;
let checkbox;
// let slider;
let x = 0;
let y = 0;

function preload(){
  img = loadImage("images/Minutemen.png");
// p1 = loadImage('');
// p2 = loadImage('');
// p3 = loadImage('');
}

function setup () {
// photos.push(p1);
// photos.push(p2);
// photos.push(p3);
createCanvas (windowWidth, windowHeight);  
theInput = createInput();
theInput.position(x+200,y+200)
// let button = createButton('hi');
// button.position(width/2,height/2);
// button.mousePressed(()=> {
//   let r = random(img);
//   image(img,10,10)
// });

// checkbox1 = createCheckbox();
// checkbox1.position(x+400,y+400)
// let span = createSpan('evil');
// span.position(377,400);
// checkbox1.mouseClicked(()=> {
//  if(checkbox1.checked())
//    background(125,0,70);
//  else
//      background(255); })
// // background (125,0,70);

// checkbox2 = createCheckbox();
// checkbox2.position(x+400,y+420)
// let pan = createSpan('good');
// pan.position(370,420);
// checkbox2.mouseClicked(()=>{
  
//   if(checkbox2.checked())
//     background(70,0,125);
// else
//     background(255);
// })
// // background (70,0,125);

let checkbox1 = createCheckbox();
  checkbox1.position(x+400, y+400);
  let span = createSpan('evil');
 span.position(377,400);
  checkbox1.mouseClicked(() => {
    if(checkbox1.checked()) {
      background(125,0,70);
    } else {
      background(220);
    }
  });
  
  let checkbox2 = createCheckbox();
  checkbox2.position(x+400, y+420);
  let pan = createSpan('good');
   pan.position(370,420);
  checkbox2.mouseClicked(() => {
    if(checkbox2.checked()) {
      background(70,0,125);
    } else {
      background(220);
    }
  });

// let checkboxPos = checkbox.position();
// let spanSize = span.size();

// checkbox.mouseReleased
// span.position(checkboxPos.x - spanSize.width, checkboxPos.y).

// slider = createSlider(500,200);
// slider.size(200);

}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

 function draw(){
background (212);
let words = theInput.value();
text(words, 20, 50);

 }