console.log("script.js is working")

// get house
const myEarth = document.querySelector("#earth");


// 
const myTextBoxContainer = document.querySelector("#textBoxContainer");

//house event listener
myEarth.addEventListener("click", myEarthClicked);

// functions
function myEarthClicked(){
    
    console.log("Hello Earthling");
    
    myTextBoxOpen();
}


function myTextBoxOpen(){
    
    var x = 0;
    var y = 0;
    
    myTextBoxContainer.innerHTML + `<a-box position="${x} ${y} 0" color="#fff" depth="2" height="4" width="0.5"></a-box>`
    
}

// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }