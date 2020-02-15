function add (a, b) {
  return a + b; 
}
var  i = 0;
while ( i++ < 1000000000 ) {
  add(1,2);
}
while ( i++ < 1000000000 ) {
  add(1,2.3);
}
while ( i++ < 1000000000 ) {
  add('1','2.3');
}
