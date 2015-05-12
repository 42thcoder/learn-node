function* fact(n){
  for(var i = 1; i <= n; i++){
    var result = 1;

    for(var j = 1; j <= i; j++){
      result = result * j;
    }
    yield result;
  }
}

for(var n of fact(5)){
  console.log(n);
}

function *factorial (n) {
  var result = 1;
  for (var i = 1; i <= n; i++) {
    result *= i;
    yield result;
  }
}

for (var n of factorial(5)) {
  console.log(n)
}