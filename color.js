// We'll need a string of 6 characters, and have to use 
// math.random on an array of 0-9 and A-F
// Potenial Issue: A-F will have to be a string, so we need to figure
// out a way to combine strings with integers. 
// REMEBER TO REFERENCE ARRAY WHEN YOU MOVE IT //
// for (i = 0; i < hexCharacters.length; i++) {
//   // We need it to loop through the string, and produce 6 random characters from the string
// }
// var hexCharacters = [
//   '0',
//   '1',
//   '2',
//   '3',
//   '4',
//   '5',
//   '6',
//   '7',
//   '8',
//   '9',
//   'A',
//   'B',
//   'C',
//   'D',
//   'E',
//   'F'
// ]
class Color {
  constructor() {
    this.locked = false;
    this.color ;
  } 
  createColor() {
  var hexCharacters = "0123456789ABCDEF"
  var code = [] 
  for (var i = 0; i < 6; i ++) {
    code.push(hexCharacters[Math.floor(Math.random( )*hexCharacters.length)]) 
  }
  return console.log(`#${code.join("")}`)

  // console.log(hexCharacters[Math.floor(Math.random( )*hexCharacters.length)])  
  
 }
}

var color = new Color
color.createColor();