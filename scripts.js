//const Color = require("./color")
//const Palette = require("./palette")
 
//queryselectors
var box1 =  document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")
var hexCode1 = document.querySelector("#hex1")
var hexCode2 = document.querySelector("#hex2")
var hexCode3 = document.querySelector("#hex3")
var hexCode4 = document.querySelector("#hex4")
var hexCode5 = document.querySelector("#hex5")
var newPaletteButton = document.querySelector("#new-palette-button")

//listeners
window.addEventListener("load", showPalette)
newPaletteButton.addEventListener("click", replaceColor)

//functions
function showPalette() {
createPalette()
}


function createPalette() {
    var color1 = new Color()
    var color2 = new Color()
    var color3 = new Color()
    var color4 = new Color()
    var color5 = new Color()
    var randomPalette = new Palette(color1, color2, color3, color4, color5)
    box1.style.backgroundColor = randomPalette.colorPalette[0].color
    box2.style.backgroundColor = randomPalette.colorPalette[1].color
    box3.style.backgroundColor = randomPalette.colorPalette[2].color
    box4.style.backgroundColor = randomPalette.colorPalette[3].color
    box5.style.backgroundColor = randomPalette.colorPalette[4].color
    hexCode1.innerText = randomPalette.colorPalette[0].color
    hexCode2.innerText = randomPalette.colorPalette[1].color
    hexCode3.innerText = randomPalette.colorPalette[2].color
    hexCode4.innerText = randomPalette.colorPalette[3].color
    hexCode5.innerText = randomPalette.colorPalette[4].color
}
// function replaceColor(randomPalette){
//         randomPalette.replaceColors()
//         box1.style.backgroundColor = randomPalette.colorPalette[0].color
//         box2.style.backgroundColor = randomPalette.colorPalette[1].color
//         box3.style.backgroundColor = randomPalette.colorPalette[2].color
//         box4.style.backgroundColor = randomPalette.colorPalette[3].color
//         box5.style.backgroundColor = randomPalette.colorPalette[4].color
//         hexCode1.innerText = randomPalette.colorPalette[0].color
//         hexCode2.innerText = randomPalette.colorPalette[1].color
//         hexCode3.innerText = randomPalette.colorPalette[2].color
//         hexCode4.innerText = randomPalette.colorPalette[3].color
//         hexCode5.innerText = randomPalette.colorPalette[4].color
//     }



//=========NOTES=========//
//===> A potential refactoring opportunity, more research is needed.
// var test = document.querySelectorAll(".hex-and-lock")
// test[0].firstChild.nextSibling.innerText = randomPalette.colorPalette[0].color
