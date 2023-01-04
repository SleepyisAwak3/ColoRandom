class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.colorPalette = [color1, color2, color3, color4, color5];
    this.id = Date.now();
  };
  replaceColors() {
    for (var i = 0; i < this.colorPalette.length; i++) {
      if (this.colorPalette[i].color.locked === false) {
        this.colorPalette.color.createColor()
      };
    };
  };
  lockColor() {
    for (var i = 0; i < this.colorPalette.length; i++) {
      this.colorPalette[i].color.locked = true; 
    };
  };
};

