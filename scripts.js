//const Color = require("./color")
//const Palette = require("./palette")

//queryselectors
var box1 =  document.querySelector("#box1")
var box2 = document.querySelector("#box2")
var box3 = document.querySelector("#box3")
var box4 = document.querySelector("#box4")
var box5 = document.querySelector("#box5")

//listeners
window.addEventListener("load", showPalette)

//functions
function showPalette() {
var color1 = new Color()
var color2 = new Color()
var color3 = new Color()
var color4 = new Color()
var color5 = new Color()
color1.createColor()
color2.createColor()
color3.createColor()
color4.createColor()
color5.createColor()


var randomPalette = new Palette(color1, color2, color3, color4, color5) 
console.log(randomPalette)
}


