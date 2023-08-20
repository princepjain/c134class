objects = [];
status = "";

function preload(){
//img = loadImage("https://i.postimg.cc/7L4pWnkb/dog-cat.jpg")
}

function setup(){
canvas = createCanvas(600,425)
canvas.position(400,150);
video = createCapture(VIDEO)
video.hide();
objectdetector = ml5.objectDetector("cocossd", modalloaded)
document.getElementById("status").innerHTML = "status: Detecting object"

}

function modalloaded(){
console.log("modal has been loaded")
status = true;
}
function gotresults(error, results){
if(error){
    console.log("error")
}
else{
    console.log(results)
    objects = results;
}
}


function draw(){

    image(video,0,0,600,425)

   a = random(255);
   b = random(255);
   c = random(255);

if(status != ""){
    objectdetector.detect(video, gotresults)
    for(i=0;i<objects.length;i++){
        
        document.getElementById("status").innerHTML = "Satus: Object Detected";
        name = objects[i].label;
        percent = floor(objects[i].confidence*100);
        fill(a,b,c)
        text(name + " "+percent+"%" , objects[i].x+15,objects[i].y+15)
        noFill();
        stroke(a,b,c)
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        document.getElementById("no_of_objects").innerHTML = objects.length;
    }
}
}