function add(a, b) {
	return a + b;
}

let iterations = 1000000;
while ( iterations-- ) {
  add(1,3);
}

add('foo','bar');