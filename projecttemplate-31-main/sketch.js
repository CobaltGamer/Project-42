const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
var engine, world; 
var drops = [];

function preload(){
    
}

function setup(){
   var canvas = createCanvas(400,400);
   engine = Engine.create();
   world = engine.world;


}

function draw(){
    background("black");
    Engine.update(engine);
    if(frameCount % 1 === 0) {
        drops.push(new Drop(random(0,400),(random(0,400))));
    }
    for(var i = 0; i<drops.length;i++){
        drops[i].display();
    }
}   

