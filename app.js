"use strict";
// function from rgb value into hex
function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
console.log(hex(205, 109, 42));
