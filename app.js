// "use strict";
// // function from rgb value into hex

// // console.log(hex(205, 109, 42));
// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function () {
//     //desturing the this keyword
//     const { r, g, b } = this;
//     return `rgb(${r},${g},${b})`;
//   };
//   color.hex = function () {
//     const { r, g, b } = this;
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   };
//   return color;
// }
// //new color
// const firstColor = makeColor(45, 12, 32);
// firstColor.hex();

// // constuctor funtion
// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this);
// }
// //this will create a prototype in Color not as a function like we had in factory methods
// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };
// //will return hex value of rgb
// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// };
// Color.prototype.rgba = function (a = 1.0) {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b},${a})`;
// };

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(10, 20, 30);

class Color {
  // constructor is a function that will execute immediately whenever a new color is created
  constructor(r, g, b, name) {
    // console.log("inside constructor function");
    // console.log(r, g, b);
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  rgba(a = 1.0) {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b},${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
}
const c1 = new Color(127, 0, 255, "violet");
