function getX(o) {
	return o.x;
}
const obj1 = {
  x: 2,
  y: 4.1
}

const obj2 = {
  x: 4
}
obj2.y = 2.2;

let iterations = 1e7;
while ( iterations-- ) {
  getX(obj1);
  getX(obj2);
}