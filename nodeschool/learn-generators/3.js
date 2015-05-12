function* flat(arr){
  for(var i = 0; i < arr.length; i++){
    var item = arr[i];
    if(typeof item === 'number'){
      yield item;
    } else {
      yield * flat(item);
    }
  }
}

var A = [1, [2, [3, 4], 5], 6];

for(var f of flat(A)){
  console.log(f);
}


function *flat (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      yield* flat(arr[i]);
    }
  } else {
    yield arr;
  }
}

var A = [1, [2, [3, 4], 5], 6];
for (var f of flat(A)) {
  console.log( f );
}
    // 1 2 3 4 5 6
