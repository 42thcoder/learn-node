var find_file = require('./mymodule.js'),
    dir = process.argv[2],
    extension = process.argv[3]

find_file(dir, extension, function(err, files){
  if(err) throw err;

  files.forEach(function(file){
    console.log(file);
  })
});