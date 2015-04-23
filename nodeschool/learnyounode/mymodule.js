var fs = require('fs'),
    path = require('path');

module.exports = function(dir, extension, callback){
  extension = '.' + extension;

  fs.readdir(dir, function(err, data){
    if(err) {
      return callback(err);
    }

    callback(null, data.filter(function(ele){
      return path.extname(ele) === extension
    }));
  });
}