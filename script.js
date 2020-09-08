var handy = document.getElementById("handy");
var alien = document.getElementById("alien");
var field = document.getElementById("field");

var aim = document.getElementById("aim");
var x = 0;
var y = 0;
aim.addEventListener("click", function () {
    move(y, x)
});
aim.addEventListener("mousemove", function () {
    x = (event.clientX - 8) / 30;
    y = (event.clientY - 607) / -30;
    document.getElementById("Strength").innerHTML = "Strength: " + (Math.sqrt(x*x + y*y)).toFixed(2);
    document.getElementById("Angle").innerHTML = "Angle : " + (Math.asin(y / Math.sqrt(y * y + x * x)) * 57.2958).toFixed(2);
})



var xPos = 0;
var yPos = 0;
var gravitation = 0.0981;
var down = 0;
var interval = 0;
var result = "";
var fly = false;
var rotate = 0;

function newTry() {
    if(fly){
        clearInterval(interval);
        fly = false;
        
    }
    alienPos = Math.floor(Math.random() * Math.floor(1170)) + 250

    alien.style.left = alienPos + "px";
    gravition = 0;
    xPos = 0;
    yPos = 0;
    
    handy.style.bottom = yPos + "px";
    handy.style.left = xPos + "px";
    result = "";
    document.getElementById("result").innerHTML = result;
    document.getElementById("start").style.display = "none";

}

function setEarth(){
    gravitation = 0.0981;
    field.style.backgroundImage = "url(images/earth_1.jpg)";
    field.style.borderBottom = "1rem solid green";
    document.getElementById("gravitation").innerHTML = "Gravitation: 9.81m/s<sup>2</sup>"
    newTry();
}

function setMoon(){
    gravitation = 0.0162;
    field.style.backgroundImage = "url(images/moon.jpg)";
    field.style.borderBottom = "1rem solid gray";
    document.getElementById("gravitation").innerHTML = "Gravitation: 1.62m/s<sup>2</sup>"
    newTry();
}
function setMars(){
    gravitation = 0.0369;
    field.style.backgroundImage = "url(images/mars.jfif)";
    field.style.borderBottom = "1rem solid #804225";
    document.getElementById("gravitation").innerHTML = "Gravitation: 3.69m/s<sup>2</sup>"
    newTry();
}

function setJupiter(){
    gravitation = 0.2479;
    field.style.backgroundImage = "url(images/jupiter.jpg)";
    field.style.borderBottom = "1rem solid #a7856a";
    document.getElementById("gravitation").innerHTML = "Gravitation: 24.79m/s<sup>2</sup>"
    newTry();
}

function move(up, left) {
    if(fly){
        
        return;
    }
    fly = true;

    interval = 0;
    down = 0;
    
    interval = setInterval(nextPosition, 10, up, left);

    return;
}

function nextPosition(up, left) {
    if (yPos < -5) {

        

        clearInterval(interval);
        if (Math.abs(xPos - alienPos) < 50) {
            result = "you hit the Alien";
        } else if (Math.abs(xPos - alienPos) < 300) {
            result = "close";
        } else {
            result = "LoL";
        }

        document.getElementById("result").innerHTML = result;
        fly = false;
        return;

    }
    rotate = rotate + 6;
    down -= gravitation;
    xPos = xPos + left;
    yPos = yPos + up + down;
    handy.style.transform = "rotate(" + rotate + "deg)";
    handy.style.bottom = yPos + "px";
    handy.style.left = xPos + "px";
}