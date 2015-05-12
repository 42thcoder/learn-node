var fs = require('fs');

function * g(done){
  try{
    var dirFiles = yield fs.readdir('NoNoNoNo', done);
    firstFile = dirFiles[0];
  } catch(error){
    firstFile =  null;
  }

  console.log(firstFile);
}

function run(generator) {
  var it = g(go);

  function go(err, result){
    if(err) it.throw();
    it.next(result);
  }

  go();
}

run(g);

