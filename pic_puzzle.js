let imgMedium=['./nature/greenlake.jpg','./nature/hill.jpg','./nature/icemountain.jpg','./nature/lake.jpg'];
let image = document.querySelector('img');

function easyMode(){
    for (let index = 0; index < imgMedium.length; index++) {
        image.src = imgMedium[index];
    }return index;

}