// Note: on page load, a new instance of Palette will be declared. 
// This Palette will be used until a user decides to save that Palette. 
// Then, a new instance will be created and used until that palette is 
// saved. Continue ad infinitum.
// It should have 5 Colors
// It should have a unique ID
// It should be able to replace the Colors with new Colors
// It should be able to lock Colors
// It should only replace unlocked Colors

class Palette {
  constructor( color1, color2, color3, color4, color5) {
    this.colorPalette = [
      color1, 
      color2, 
      color3, 
      color4, 
      color5
    ];
    // we need it to push 5 colors into the empty array above. 
    // we need the createColor function to run 5 times and then store the outcomes from the function
    // in the empty array.
    this.id = Date.now();
  }
  replaceColors(color,) {
      // remove colors from the array 
      // add new colors from function 
      for (var i = 0; i < this.colorPalette.length; i++) {
        if (this.colorPalette[i].color.locked === false ) {
          this.colorPalette.splice(i,1)
        }
      }
  }
}


module.exports = Palette;