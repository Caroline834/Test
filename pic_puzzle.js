let imgEasy =['./animal/animal2.jpg','./animal/bird.jpg','./animal/fish.jpg','./animal/puppy.jpg']
let imgMedium = ['./nature/greenlake.jpg', './nature/hill.jpg', './nature/icemountain.jpg', './nature/lake.jpg'];
let imgHard = ['./fruit/apple.jpg','./fruit/berry.jpg','./fruit/lime.jpg','./fruit/strawberry.jpg']
let image1 = document.getElementById("p1");
let image2 = document.getElementById("p2");
let image3 = document.getElementById("p3");
let image4 = document.getElementById("p4");

function easyMode() {
    image1.src = imgEasy[0];
    image2.src = imgEasy[1];
    image3.src = imgEasy[2];
    image4.src = imgEasy[3];
}
function mediumMode() {
    image1.src = imgMedium[0];
    image2.src = imgMedium[1];
    image3.src = imgMedium[2];
    image4.src = imgMedium[3];
}
function hardMode() {
    image1.src = imgHard[0];
    image2.src = imgHard[1];
    image3.src = imgHard[2];
    image4.src = imgHard[3];
}
