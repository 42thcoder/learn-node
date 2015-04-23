var dir = process.argv[2],
    extension = '.' + process.argv[3],
    fs = require('fs'),
    path = require('path');

fs.readdir(dir, function(err, list){
  if(err) throw err;

  list.forEach(function(file_name){
    if(path.extname(file_name) === extension){
      console.log(file_name);
    }
  })
});