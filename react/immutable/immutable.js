var Immutable = require('immutable');

var a={
  a:{
    a:1
  },
  b:{
    b:1
  }
}

var map1 = Immutable.Map(a);
var map2 = map1.set('b', {c:1});

console.log(JSON.stringify(map1),JSON.stringify(map2))