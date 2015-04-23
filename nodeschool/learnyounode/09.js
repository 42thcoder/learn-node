var http = require('http');
var bl = require('bl');
var args = process.argv.slice(2);
var results = [];
var finish_count = 0;

args.forEach(function(url, index){
  http.get(url, function(response){
    response.pipe(bl(function(err, data){
      if(err)
        return console.error(error);

      results[index] = data;
      finish_count++;

      if(finish_count === args.length){
        printResults()
      }
    }));
  });
});

function printResults(){
  results.forEach(function(result){
    if(result){
      console.log(result.toString());
    } else {
      console.log('');
    }
  });
}

