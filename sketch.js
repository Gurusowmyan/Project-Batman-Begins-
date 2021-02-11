var thunder1,thunder2,thunder;
var umbrella;
var drops;

function preload(){
    //thunder1.loadImage("images/thunderbolt/1.png");
   // thunder2.loadImage("images/thunderbolt/2.png");
}

function setup(){
   
    
}

function draw(){
    createCanvas(400,1200);
    background(0);
    thunder();
}   
function thunder() {
rand = Math.round(random(1,4));
if(frameCount%80 === 0) {
thunderCreatedFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);
switch(rand) {
    case 1:thunder.addImage(thunder1);
    break;
    case 2:thunder.addImage(thunder2);
    break;
    default:break;
}
thunder.scale =random(0.3,0.6);
}
}
