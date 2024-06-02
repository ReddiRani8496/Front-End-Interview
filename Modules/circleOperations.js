const PI = 22 / 7;

function area(radius) {
  return PI * radius * radius;
}

function circumference(radius) {
  return 2 * PI * radius;
}

function volume(radius) {
  return (4 / 3) * PI * radius * radius * radius;
}

module.exports = { area, circumference, volume };
