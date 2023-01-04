class Color {
  constructor() {
    this.locked = false;
    this.color ;
  } 
  createColor() {
    var hexCharacters = "0123456789ABCDEF";
    var code = [];
    for (var i = 0; i < 6; i ++) {
      code.push(hexCharacters[Math.floor(Math.random( )*hexCharacters.length)]);
    }
    this.color = `#${code.join("")}`;
  }
}
module.exports = Color;