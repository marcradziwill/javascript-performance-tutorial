let objectA = {
  x: 1,
  y: 2,
  z: 3
};

let objectB = {};

objectB.x = 1;
objectB.y = 2;
objectB.z = 3;

let objectC = Object.assign({}, objectA);
let objectD = {
  x: 1,
  y: 2,
  z: 3
};