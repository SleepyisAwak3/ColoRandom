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
	toggleLock(colorIndex) {
		this.colorPalette[colorIndex].locked = !this.colorPalette[colorIndex].locked;
		console.log(this.colorPalette);
	}
}