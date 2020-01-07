function doit() {
  var foo = {default:'bar', baz: "qux"};
  foo.baz = 'quux';
  // default is a reserved word which breaks parsing in IE<=8
  return foo.default;
}
