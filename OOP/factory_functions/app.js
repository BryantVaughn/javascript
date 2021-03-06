function hex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
function rgb(r, g, b) {
  return `rgb(${r}, ${g}, ${b})`;
}

console.log(rgb(0, 100, 25));

// One major issue with this approach is
// each object has unique function.
function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function() {
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  }
  color.hex = function() {
    const { r, g, b } = this;
    return (
      "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    );
  }
  color.rgba = function(a) {
    const { r, g, b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
  return color;
}