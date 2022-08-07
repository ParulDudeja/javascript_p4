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

// constuctor funtion
function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
  console.log(this);
}
Color.prototype.rgb = function () {
  const { r, g, b } = this;
  return `rgb(${r}, ${g}, ${b})`;
};
