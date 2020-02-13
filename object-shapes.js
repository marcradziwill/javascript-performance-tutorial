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

console.log("a is", objectA);
console.log("b is", objectB);
console.log("b is", objectC);
console.log("b is", objectD);
console.log("objectA and objectB have same shape:", %HaveSameMap(objectA, objectB));
console.log("objectA and objectC have same shape:", %HaveSameMap(objectA, objectC));
console.log("objectA and objectD have same shape:", %HaveSameMap(objectA, objectD));