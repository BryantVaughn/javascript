// // This is a Constructor Function...
// function Color(r,g,b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// // If you call it on its own like a regular function...
// Color(35, 60, 190); // undefined
// // It returns undefined. Seems useless!

// // *****************
// // THE NEW OPERATOR!
// // *****************

// // 1. Creates a blank, plain JavaScript object;
// // 2. Links (sets the constructor of) this object to another object;
// // 3. Passes the newly created object from Step 1 as the this context;
// // 4. Returns this if the functions doesn't return its own object.

// Color.prototype.rgb = function() {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function() {
//   const { r, g, b } = this;
//   return (
//     "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//   );
// };

// Color.prototype.rgba = function(a=1.0) {
//   const { r, g, b } = this;
//   return `rgba(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(40,250,60);
// const color2 = new Color(0,0,0);


// Rework above to use class syntax
class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    const { r, g, b } = this;
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a=1.0) {
    const { r, g, b } = this;
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return (
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  }

  hsl() {
    const { h, s, l } = this;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }

  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue}, ${s}%, ${l}%)`;
  }

  fullySaturated() {
    const { h, l } = this;
    return `hsl(${h}, 100%, ${l}%)`;
  }

  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if(delta === 0) h = 0;
    else if(cmax === r) h = ((g - b) / delta) % 6;
    else if(cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if(h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

const red = new Color(255, 67, 89, "tomato");
const white = new Color(255, 255, 255, "white");
const orange = new Color(230, 126, 34, "carrot");