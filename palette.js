class Palette {
  constructor(color0, color1, color2, color3, color4) {
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
    for (var i = 0; i < this.colorPalette.length; i++) {
      this.colorPalette[i].color.locked = true; 
    }
  }
}

