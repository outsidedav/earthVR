console.log("script.js is working")

// get pins and Sphere
const myAmerica = document.querySelector("#americaPin");
const myAfrica = document.querySelector("#africaPin");
const myAsia = document.querySelector("#asiaPin");
const myHawaii = document.querySelector("#hawaiiPin");
const myAustralia = document.querySelector("#australiaPin");
const mySpaceStation = document.querySelector("#spaceStationPin");
const mySky = document.querySelector("#sky");

// get container
const myTextBoxContainer = document.querySelector("#textBoxContainer");
const myTextContainer = document.querySelector("#textContainer");
const myExitBoxContainer = document.querySelector("#exitBoxContainer");

// event listeners
myAmerica.addEventListener("click", myAmericaClicked);
myAsia.addEventListener("click", myAsiaClicked);
myAfrica.addEventListener("click", myAfricaClicked);
myHawaii.addEventListener("click", myHawaiiClicked);
mySpaceStation.addEventListener("click", mySpaceStationClicked);
myAustralia.addEventListener("click", myAustraliaClicked);

myTextBoxContainer.addEventListener("click", myTextBoxClicked);
myExitBoxContainer.addEventListener("click", myExitBoxClicked);

console.log(myAmerica);


// global Variables

// textBox Position
var x = 11;
var y = 28.5;
var z = 19;

// exitBox Position
var xx = 0;
var yy = 0;
var zz = 19;

var scale = 10;

var country = "stars";

// Country functions
function myAmericaClicked(){
    console.log("America Clicked");
    country = "America"
    myTextBoxOpen(country);
}

function myAfricaClicked(){
    console.log("Africa Clicked");
    country = "Africa"
    myTextBoxOpen(country);
}

function myHawaiiClicked(){
    console.log("Hawaii Clicked");
    country = "Hawaii"
    myTextBoxOpen(country);
}

function myAsiaClicked(){
    console.log("Asia Clicked");
    country = "Asia"
    myTextBoxOpen(country);
}

function myAustraliaClicked(){
    console.log("Australia Clicked");
    country = "Australia"
    myTextBoxOpen(country);
}

function mySpaceStationClicked(){
    console.log("Space Station Clicked");
    country = "space"
    myTextBoxOpen(country);
}

//Open Methods
function myTextBoxOpen(e){
    console.log("Hello paper");
    myTextBoxContainer.innerHTML += `<a-plane id="textbox" position="20 30 15" height="10" width="20"></a-entity>`
    myTextContainer.innerHTML = `<a-text id="Text" value="Meditate in \n ${e}" position="${x} ${y} ${z}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`
}

function myExitBoxOpen(){
    myTextContainer.innerHTML = `<a-text id="Text" value="X Exit" position="${xx} ${yy} ${zz}" color="black" scale="${scale} ${scale} ${scale}" style="font-family:roboto; color:pink;"></a-text>`
    myExitBoxContainer.innerHTML += `<a-plane id="textbox" position="${xx} ${yy} ${zz}" height="10" width="20"></a-entity>`
    myTextBoxContainer.innerHTML = ``
    // country="space"
}

// function for clicking Text Box
function myTextBoxClicked(){
    console.log("textBoxContainer Clicked");
    myExitBoxOpen();
    changeSky(country);
    showEarth("false");
    showYogi("true");
}

// function for Exit Box
function myExitBoxClicked(){
    console.log("Exit Box Clicked");
    changeSky("stars");
    console.log("changeSky = space");
    myExitBoxContainer.innerHTML = ` `
    console.log("myExitBoxContainer.innerHTML = null");
    showEarth("true");
    showYogi("false");
}


// Methods
function exitClicked(){
    myExitBoxClicked();
}

function changeSky(e){
    
    console.log("changeSky running");
    console.log(mySky);
    
    mySky.setAttribute("src", `#${e}`);
    console.log(mySky);
}

function showEarth(e){
    const myEarthContrainer = document.querySelector("#earth");
    const mySpaceStationContrainer = document.querySelector("#spaceStationContainer");
    
    if(e == "false"){
    myEarthContrainer.setAttribute("visible", "false");
    mySpaceStationContrainer.setAttribute("visible", "false");
    }
    
    if(e == "true"){
    myEarthContrainer.setAttribute("visible", "true");
    mySpaceStationContrainer.setAttribute("visible", "true");
    }
    
}

function showYogi(e){
    
    const myYogiContainer = document.querySelector("#yogiContainer");
    
    
     if(e == "false"){
    myYogiContainer.innerHTML = ` ` 
     }
     
     if(e == "true"){
    myYogiContainer.innerHTML = `<a-entity  gblock="https://poly.google.com/view/eZMcxLOjZK_" rotation="0 0 0" position="0 -5 -30" scale="5 5 5">` 
     }
}