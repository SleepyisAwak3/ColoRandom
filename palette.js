class Palette {
  constructor() {
    var color0 = new Color();
    var color1 = new Color();
    var color2 = new Color();
    var color3 = new Color();
    var color4 = new Color();
    this.colorPalette = [color0, color1, color2, color3, color4];
    this.id = Date.now();
  }
  replaceColors() {
    for (var i = 0; i < this.colorPalette.length; i++) {
      if (!this.colorPalette[i].locked) {
        this.colorPalette[i].createColor();
      }
    }
  }
  lockColor() {
    console.log("before")
    for (var i = 0; i < this.colorPalette.length; i++) {
      if (event.target.id)
      this.colorPalette[0].locked = true; 
      console.log("after")
    }
  }
}
// lockColor this.colorPalette[0] needs to be more dynamic after 