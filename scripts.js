var color0 = new Color();
var color1 = new Color();
var color2 = new Color();
var color3 = new Color();
var color4 = new Color();
var randomPalette = new Palette(color0, color1, color2, color3, color4);
var savedPalettes = [];

//queryselectors
var box0 =  document.querySelector("#box0");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var hexCode0 = document.querySelector("#hex0");
var hexCode1 = document.querySelector("#hex1");
var hexCode2 = document.querySelector("#hex2");
var hexCode3 = document.querySelector("#hex3");
var hexCode4 = document.querySelector("#hex4");
var newPaletteButton = document.querySelector("#new-palette-button");
var savePaletteButton = document.querySelector("#save-palette-button");
var savedPaletteSection = document.querySelector(".saved-palettes");
var savedMiniPalettes = document.querySelector(".saved-mini-palettes");
var miniBox0 = document.querySelector("#mini-box0");
var miniBox1 = document.querySelector("#mini-box1");
var miniBox2 = document.querySelector("#mini-box2");
var miniBox3 = document.querySelector("#mini-box3");
var miniBox4 = document.querySelector("#mini-box4");

//listeners
window.addEventListener("load", function() {
    showPalette(randomPalette)
})
newPaletteButton.addEventListener("click", function() {
    replaceColor(randomPalette)
})
savePaletteButton.addEventListener("click", function() {
    savePalette(randomPalette, savedPalettes)
})

//functions
function showPalette(randomPalette) {
createPalette(randomPalette);
}

function createPalette(palette) {
    box0.style.backgroundColor = palette.colorPalette[0].color;
    box1.style.backgroundColor = palette.colorPalette[1].color;
    box2.style.backgroundColor = palette.colorPalette[2].color;
    box3.style.backgroundColor = palette.colorPalette[3].color;
    box4.style.backgroundColor = palette.colorPalette[4].color;
    hexCode0.innerText = palette.colorPalette[0].color;
    hexCode1.innerText = palette.colorPalette[1].color;
    hexCode2.innerText = palette.colorPalette[2].color;
    hexCode3.innerText = palette.colorPalette[3].color;
    hexCode4.innerText = palette.colorPalette[4].color;    
}

function replaceColor(palette) {
    palette.replaceColors();
    box0.style.backgroundColor = palette.colorPalette[0].color;
    box1.style.backgroundColor = palette.colorPalette[1].color;
    box2.style.backgroundColor = palette.colorPalette[2].color;
    box3.style.backgroundColor = palette.colorPalette[3].color;
    box4.style.backgroundColor = palette.colorPalette[4].color;
    hexCode0.innerText = palette.colorPalette[0].color;
    hexCode1.innerText = palette.colorPalette[1].color;
    hexCode2.innerText = palette.colorPalette[2].color;
    hexCode3.innerText = palette.colorPalette[3].color;
    hexCode4.innerText = palette.colorPalette[4].color;
}

function savePalette(palette, paletteArray) {
    if (!paletteArray.includes(palette)) {
        paletteArray.push(palette)
    }
  displaySavedPalettes(paletteArray);
}

function displaySavedPalettes(paletteArray) {
    savedMiniPalettes.innerHTML = ""
    for (var i = 0; i < paletteArray.length; i++) {
        savedMiniPalettes.innerHTML += `
         <section class="saved-mini-palette">
              <div class="box mini" id="mini-box0" style= "background-color: ${paletteArray[i].colorPalette[0].color};"></div>
              <div class="box mini" id="mini-box1" style= "background-color: ${paletteArray[i].colorPalette[1].color};"></div>
              <div class="box mini" id="mini-box2" style= "background-color: ${paletteArray[i].colorPalette[2].color};"></div>
              <div class="box mini" id="mini-box3" style= "background-color: ${paletteArray[i].colorPalette[3].color};"></div>
              <div class="box mini" id="mini-box4" style= "background-color: ${paletteArray[i].colorPalette[4].color};"></div>
              <p class="trash" data-delete-id="${paletteArray[i].id}"> 🗑 </p>
        </section>
       `;        
    }
    color0 = new Color();
    color1 = new Color();
    color2 = new Color();
    color3 = new Color();
    color4 = new Color();
    randomPalette = new Palette(color0, color1, color2, color3, color4);
    showPalette(randomPalette);
}

//=========NOTES=========//
//===> A potential refactoring opportunity, more research is needed.
// var test = document.querySelectorAll(".hex-and-lock")
// test[0].firstChild.nextSibling.innerText = randomPalette.colorPalette[0].color
