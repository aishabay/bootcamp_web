// let images = [];

const testFolder = '../../images/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
files.forEach(file => {
    console.log(file);
});
});

function changePicNext() {
    pic.src = "../../images/zuko.jpeg";
}
function changePicPrev(){
    pic.src = "../../images/toph.png";
}

btn1.addEventListener('click', changePicNext);
btn2.addEventListener('click', changePicPrev);