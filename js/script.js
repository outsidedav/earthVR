console.log("script.js is working")

// get pins and Sphere
const myAmerica = document.querySelector("#americaPin");
const myAfrica = document.querySelector("#africaPin");
const myAsia = document.querySelector("#asiaPin");
const mySky = document.querySelector("#sky");

// get container
const myTextBoxContainer = document.querySelector("#textBoxContainer");
const myTextContainer = document.querySelector("#textContainer");

// event listeners
myAmerica.addEventListener("click", myAmericaClicked);
myAsia.addEventListener("click", myAsiaClicked);
myAfrica.addEventListener("click", myAfricaClicked);
myTextBoxContainer.addEventListener("click", myTextBoxClicked);

console.log(myAmerica);


// global Variables
var x = 11;
var y = 28.5;
var z = 19;

var scale = 10;

var country = "space";

// functions
function myAmericaClicked(){
    
    console.log("America Clicked");
    myTextContainer.innerHTML = `<a-text id="usaText" value="Meditate in \n the USA!" position="${x} ${y} ${z}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`

    country = "america"
    
    myTextBoxOpen();
}

function myAfricaClicked(){
    console.log("Africa Clicked");
    country = "africa"
    myTextContainer.innerHTML = `<a-text id="usaText" value="Meditate in \n Africa!" position="${x} ${y} ${z}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`
    myTextBoxOpen();
}

function myAsiaClicked(){
    console.log("Asia Clicked");
    country = "asia"
    myTextContainer.innerHTML = `<a-text id="usaText" value="Meditate in \n Asia!" position="${x} ${y} ${z}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`
    myTextBoxOpen();
}



function myTextBoxOpen(){
    console.log("Hello paper");
    myTextBoxContainer.innerHTML += `<a-entity id="textbox" gblock="https://poly.google.com/view/3SBjGDJ2fVR" position="20 30 15" scale=".1 .1 .1"></a-entity>`
}

function myExitBoxOpen(){
    myTextContainer.innerHTML = `<a-text id="usaText" value="X Exit" position="${x} ${y} ${z}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`

    myTextBoxContainer.innerHTML += `<a-entity id="textbox" gblock="https://poly.google.com/view/3SBjGDJ2fVR" position="20 30 15" scale=".1 .1 .1"></a-entity>`
}

// function for clicking Text Box
function myTextBoxClicked(){
    
    console.log("textBoxContainer Clicked");

    myExitBoxOpen();
    changeSky(country);
    hideEarth();
}

function exitClicked(){
    
    myTextBoxOpen();
}

function changeSky(e){
    
    console.log("changeSky running");
    console.log(mySky);
    
    mySky.setAttribute("src", `#${e}`);
    console.log(mySky);
}