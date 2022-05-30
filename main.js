song1 = "";
song2 = "";
leftWristX = 0;
leftWristX = 0;
rightWristY = 0;
rightWristY = 0;
sLeftWrist = 0;
statusSong1 = ""; 
statusSong2 = ""; 
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
    statusSong1 = song1.isPlaying();
    statusSong2 = song2.isPlaying();
    if( sLeftWrist > 0.2){
      fill('#FF0000');
      stroke('#FF0000');
      circle(leftWristX,leftWristY,20)
      song2.stop();
      if(statusSong1 == false){
        song1.play();
        document.getElementById('songName').innerHTML = 'Harry Potter Theme Song'
      }
  }
}
function gotResult(r) {
    if (r.length > 0) {
      console.log(r);
      sLeftWrist = r[0].pose.keypoints[9].score;
      leftWristX = r[0].pose.leftWrist.x
      leftWristY = r[0].pose.leftWrist.y
      rightWristX = r[0].pose.rightWrist.x
      rightWristY = r[0].pose.rightWrist.y
      console.log('right wrist x ' + rightWristX + 'right wrist y ' + rightWristY )
      console.log('left wrist x ' + leftWristX + 'left wrist y ' + leftWristY );
    }
  }