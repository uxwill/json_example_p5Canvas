//A wind direction vector
var wind;
// Circle position
var position;
// background transprency
var humidity;
// red value
var temp;

// var img;

// const URL1 = 'http:/' + '/www.Clker.com/cliparts/9/0/f/5/'
//           + '1194986802274589086football_ball_brice_boye_01.svg.med.png';

// function loadImageErrorOverride(errEvt) {
//   const pic = errEvt.target;
 
//   if (pic.crossOrigin == null)  return print('Failed to reload ' + pic.src + '!');
 
//   print('Attempting to reload it as a tainted image now...');
//   pic.crossOrigin = null, pic.src = pic.src;
// }

var clearSky;
var fewClouds;
var scatteredClouds;
var brokenClouds;
var showerRain;
var rain;
var thunderStorm;
var snow;
var mist;

//  URLs = [
//     "images/IMG_001.png",
//     "images/IMG_002.png",
//     "images/IMG_003.png",
//     "images/IMG_004.png"
// ];

var x, y;



function setup() {
  createCanvas(720, 400);

  // Request the data from openweathermap
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Johannesburg&units=metric', gotWeather);

  // loadJSON('http://api.openweathermap.org/data/2.5/history/city?id={993800}&type=hour&start={start}&end={end}', histWeather);

  // loadJSON('http://api.openweathermap.org/data/2.5/history/city?id={id}&type=hour&start={start}&cnt={cnt})', histWeather2);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();

  // img= loadImage("assets/pixelMan.jpg");

  // for (var i = 0, j = imageFiles.length; i < j; i++) {
  // var image = new Image;
  // image.src = 'images/' + imageFiles[i];
  // pictures.push(image);

  // }

  // Image(img, 0, 0);
  // var imgs = URLs.map(function(URL) {
  //   var img = new Image();
  //   img.src = URL;
    // document.body.appendChild(img);
    // return img;

sunMan = loadImage("assets/sunMan.gif");
cloudMan = loadImage("assets/cloudMan.gif");
rainMan = loadImage("assets/rainMan.gif");





}

function draw() {


      if (weather1 == 993800){
  var imageDiv = createDiv(image(rainMan, 360, 400));
rain();
}




// } else if (weather1 == 993200){
// var imageDiv = createDiv(image(fewClouds, 0, 0));

// }


  // background(255,255,255,humidity);

  // // This section draws an arrow pointing in the direction of wind
  // push();
  // translate(32, height - 32);
  // // Rotate by the wind's angle
  // rotate(wind.heading() + PI/2);
  // noStroke();
  // fill(255);
  // ellipse(0, 0, 48, 48);

  // stroke(45, 123, 182);
  // strokeWeight(3);
  // line(0, -16, 0, 16);

  // noStroke();
  // fill(45, 123, 182);
  // triangle(0, -18, -6, -10, 6, -10);
  // pop();
  
  // // Move in the wind's direction
  // position.add(wind);
  
  // noStroke();
  // fill(0,0,temp);
  // ellipse(position.x, position.y, 16, 16);
  // noStroke();
  // fill(0,0,temp+100);
  // ellipse(position.x, position.y-10, 5, 5);
  // ellipse(position.x+8, position.y-6, 5, 5);

  // if (position.x > width)  position.x = 0;
  // if (position.x < 0)      position.x = width;
  // if (position.y > height) position.y = 0;
  // if (position.y < 0)      position.y = height;



// if (weather1 = 993800){

// }
// // Image(img, 0, 0);
// console.log("hello");
// } 




  
  // Display as HTML elements
  // var temperatureDiv = createDiv(floor(weather.main.temp) + '&deg;');
  // var windDiv = createDiv("WIND " + windmag + " <small>KMPH</small>");
  // var weatherDiv = createDiv("WEATHER " + weather1);

  
  // Make a vector
  // wind = p5.Vector.fromAngle(angle);
  console.log(weather);
  console.log(weather1);
  // console.log(pictures);

//   if (weather1 == 993800){
//   // var imageDiv = createDiv(image(clearSky, 0, 0));



// // Image(img, 0, 0);
// console.log("clearSky");
// console.log(currentTime);


// }

} 

function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  // var angle = radians(Number(weather.wind.deg));
  // // Get the wind speed
  // var windmag = Number(weather.wind.speed);

  // humidity = Number(weather.main.humidity);

  // temp = Number(weather.main.temp);

  weather1 = (weather.id);

      if (weather1 == 993800){
  var imageDiv = createDiv(image(rainMan, 0, 0));
rain();
}


}
  function rain(){

      // Draw a circle
  noStroke();
  fill(0,50,200,50);
  rect(x, y, 5, 15);

 // Jiggling randomly on the horizontal axis
  // x = x + random(-1, 1);
  x = random(0,width);
  y = random(0,height);
  // Moving up at a constant speed
  y = y + 1;
  
  // Reset to the bottom
  if (y > height) {
    y = 0;
  }
}


// function histWeather(start, end){

// var currentTime = Math.floor((new Date()).getTime() / 1000);

// // console.log(currentTime);



// }








