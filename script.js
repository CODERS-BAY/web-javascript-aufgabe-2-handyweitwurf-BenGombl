var handy = document.getElementById("handy");
var alien = document.getElementById("alien");
var field = document.getElementById("field");
var velocity;
var aim = document.getElementById("aim");
var x = 0;
var y = 0;
var shot = false;
aim.addEventListener("click", function () {
    move(y, x)
    
    shot = true;
    
});
aim.addEventListener("mousemove", function () {
    if (!shot) {
        x = (event.clientX - 8) / 4100;
        y = (event.clientY - 607) / -4100;
        velocity = (Math.sqrt(x * x + y * y));
        document.getElementById("Strength").innerHTML = "Velocity: " + (velocity*100).toFixed(2) + "m/s";
        document.getElementById("Angle").innerHTML = "Angle : " + (Math.asin(y / Math.sqrt(y * y + x * x)) * 57.2958).toFixed(2) + "deg";
    }

})



var xPos = 0;
var yPos = 0;
var gravitation;
var down = 0;
var interval = 0;
var result = "";
var fly = false;
var rotate = 0;

function newTry() {
    if (fly) {
        clearInterval(interval);
        fly = false;

    }
    shot = false;
    alienPos = Math.floor(Math.random() * Math.floor(7)) + 2;

    alien.style.left = alienPos*10 + "rem";
   
    xPos = 0;
    yPos = 0;

    handy.style.bottom = yPos + "rem";
    handy.style.left = xPos + "rem";
    result = "";
    document.getElementById("result").innerHTML = result;
    document.getElementById("start").style.display = "none";
    document.getElementById("shot").innerHTML = "Distance: 0.00m";

}

function setEarth() {
    gravitation = 0.000981;
    field.style.backgroundImage = "url(images/earth_1.jpg)";
    field.style.borderBottom = "1rem solid green";
    document.getElementById("gravitation").innerHTML = "Gravitation: 9.81m/s<sup>2</sup>"
    newTry();
}

function setMoon() {
    gravitation = 0.000162;
    field.style.backgroundImage = "url(images/moon.jpg)";
    field.style.borderBottom = "1rem solid gray";
    document.getElementById("gravitation").innerHTML = "Gravitation: 1.62m/s<sup>2</sup>"
    newTry();
}

function setMars() {
    gravitation = 0.000369;
    field.style.backgroundImage = "url(images/mars.jfif)";
    field.style.borderBottom = "1rem solid #804225";
    document.getElementById("gravitation").innerHTML = "Gravitation: 3.69m/s<sup>2</sup>"
    newTry();
}

function setJupiter() {
    gravitation = 0.002479;
    field.style.backgroundImage = "url(images/jupiter.jpg)";
    field.style.borderBottom = "1rem solid #a7856a";
    document.getElementById("gravitation").innerHTML = "Gravitation: 24.79m/s<sup>2</sup>"
    newTry();
}

function move(up, left) {
    if (fly) {

        return;
    }
    fly = true;

    interval = 0;
    down = 0;

    interval = setInterval(nextPosition, 10, up, left);

    return;
}

function nextPosition(up, left) {
    if (yPos < -0.2) {



        clearInterval(interval);
        if (Math.abs(xPos - alienPos) < 0.2) {
            result = "you hit the Alien";
        } else if (Math.abs(xPos - alienPos) < 1) {
            result = "close";
        } else {
            result = "LoL";
        }

        document.getElementById("result").innerHTML = result;
        
       
        return;

    }
    rotate = rotate + 6;
    down -= (gravitation);
    xPos = xPos + left;
    yPos = yPos + up + down;
    document.getElementById("shot").innerHTML = "Distance: " + xPos.toFixed(2) + "m";
    handy.style.transform = "rotate(" + rotate + "deg)";
    handy.style.bottom = yPos*10 + "rem";
    handy.style.left = xPos*10 + "rem";
}