Webcam.set({
    width:350,
    height:300,
    image_format:"jpg",
    jpg_quality:100
});
cam=document.getElementById("camera");
Webcam.attach(cam);

function capture(){
    Webcam.snap(function(data_uri){
       document.getElementById("result").innerHTML='<img id="picture" src="'+data_uri+'">'; 
    });
}

console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tELuQ1pYW/model.json",Model_Ready);
function Model_Ready(){
    console.log("Model Loaded");
}