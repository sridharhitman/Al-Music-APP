song1 = "";
song2 = "";
leftWristX = 0;
leftWristX = 0;
rightWristY = 0;
rightWristY = 0;
function preload(){
    song1 = loadSound('m1.mp3');
    song2 = loadSound('m2.mp3');
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotResult);
}
function modelLoaded() {
    console.log("model is loaded");
  }
function draw(){
    image(video,0,0,600,500);
}
function gotResult(r) {
    if (r.length > 0) {
      console.log(r);
      leftWristX = r[0].pose.leftWrist.x
      leftWristY = r[0].pose.leftWrist.y
      rightWristX = r[0].pose.rightWrist.x
      rightWristY = r[0].pose.rightWrist.y
      console.log('right wrist x ' + rightWristX + 'right wrist y ' + rightWristY )
      console.log('left wrist x ' + leftWristX + 'left wrist y ' + leftWristY );
    }
  }