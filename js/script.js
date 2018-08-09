console.log("script.js is working")

// get house
const myEarth = document.querySelector("#earth");
const myTestSphere = document.querySelector("#testSphere");


// get container
const myTextBoxContainer = document.querySelector("#textBoxContainer");



myEarth.addEventListener("click", myEarthClicked);
myTestSphere.addEventListener("click", myEarthClicked);


console.log(myEarth);

// functions
function myEarthClicked(){
    
    console.log("Hello Earthling");
    
    myTextBoxOpen();
}



function myTextBoxOpen(){
    console.log("Hello paper");
    
    myTextBoxContainer.innerHTML += `<a-entity id="textbox" gblock="https://poly.google.com/view/3SBjGDJ2fVR" position="20 30 15" scale=".1 .1 .1"></a-entity>`
    
}




// function getRndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min) ) + min;
// }