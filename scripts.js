/*---------------Data Model------------*/
var currentPalette = new Palette();
var savedPalettes = [];

/*----------------DOM Elements----------------*/
var box0 = document.querySelector("#box0");
var box1 = document.querySelector("#box1");
var box2 = document.querySelector("#box2");
var box3 = document.querySelector("#box3");
var box4 = document.querySelector("#box4");
var boxes = [box0, box1, box2, box3, box4];
var hexCode0 = document.querySelector("#hex0");
var hexCode1 = document.querySelector("#hex1");
var hexCode2 = document.querySelector("#hex2");
var hexCode3 = document.querySelector("#hex3");
var hexCode4 = document.querySelector("#hex4");
var hexCodes = [hexCode0, hexCode1, hexCode2, hexCode3, hexCode4];
var lockIcons = document.querySelectorAll(".lock-icon");
var unlockIcons = document.querySelectorAll(".unlock-icon")
var savedPaletteSection = document.querySelector(".saved-palettes");
var newPaletteButton = document.querySelector("#new-palette-button");
var savePaletteButton = document.querySelector("#save-palette-button");
var savedMiniPalettes = document.querySelector(".saved-mini-palettes");
var mainPaletteContainer = document.querySelector("#main-palette-container");
var savedPalettesSection = document.querySelector("#saved-palettes-container");

/*---------------EventListeners-----------------*/
window.addEventListener("load", function () {
    showPalette(currentPalette);
})

newPaletteButton.addEventListener("click", function () {
    changePalette(currentPalette);
    showPalette(currentPalette);
})

savePaletteButton.addEventListener("click", function () {
    savePalette(currentPalette, savedPalettes);
    currentPalette = new Palette();
    showPalette(currentPalette);
    resetLocks(currentPalette);
    displaySavedPalettes(savedPalettes);
})

mainPaletteContainer.addEventListener("click", function (event) {
    if (event.target.dataset.colorIndex) {
        toggleColorLock(event, currentPalette);
    }
})

savedPalettesSection.addEventListener('click', function(event) {
    if(event.target.classList.contains("trash")) {
        savedPalettes.splice(event.target.parentElement.dataset.paletteIndex, 1) 
        displaySavedPalettes(savedPalettes);
    }
})

/*-------------Functions-----------------*/
function showPalette(palette) {
    for (var i = 0; i < boxes.length; i++) {
        hexCodes[i].innerText = palette.colorPalette[i].color;
        boxes[i].style.backgroundColor = palette.colorPalette[i].color;
    }
}

function changePalette(palette) {
    palette.replaceColors();
}

function resetLocks(palette) {
    for(var i = 0; i < palette.colorPalette.length; i++) {
        if(!palette.colorPalette[i].locked) {
            lockIcons[i].classList.add("hidden");
            unlockIcons[i].classList.remove("hidden");
        }
    }
}

function savePalette(palette, paletteArray) {
    if (!paletteArray.includes(palette)) {
        paletteArray.push(palette);
    }
}

function displaySavedPalettes(paletteArray) {
    savedMiniPalettes.innerHTML = "";
    for (var i = 0; i < paletteArray.length; i++) {
        savedMiniPalettes.innerHTML += `
        <section class="saved-mini-palette" data-palette-index="${i}">
              <div class="box mini" style= "background-color: ${paletteArray[i].colorPalette[0].color};"></div>
              <div class="box mini" style= "background-color: ${paletteArray[i].colorPalette[1].color};"></div>
              <div class="box mini" style= "background-color: ${paletteArray[i].colorPalette[2].color};"></div>
              <div class="box mini" style= "background-color: ${paletteArray[i].colorPalette[3].color};"></div>
              <div class="box mini" style= "background-color: ${paletteArray[i].colorPalette[4].color};"></div>
              <p class="trash"> 🗑 </p>
        </section>
       `;
    }
}

function toggleColorLock(event, palette) {
        palette.toggleLock(event.target.dataset.colorIndex);
        updateIcon(event, palette);
}

function updateIcon(event, palette) {
    if (palette.colorPalette[event.target.dataset.colorIndex].locked) {
        lockIcons[event.target.dataset.colorIndex].classList.remove("hidden");
        unlockIcons[event.target.dataset.colorIndex].classList.add("hidden");
    } else {
        lockIcons[event.target.dataset.colorIndex].classList.add("hidden");
        unlockIcons[event.target.dataset.colorIndex].classList.remove("hidden");
        }
}