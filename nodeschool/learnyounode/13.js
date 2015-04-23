var http = require('http'),
url = require('url');

http.createServer(function(request, response){
  url_info = url.parse(request.url, true);
  date = new Date(url_info.query.iso);

  if(url_info.pathname === '/api/parsetime'){
    result = parsetime(date);
  } else if (url_info.pathname === '/api/unixtime' ){
    result = unixtime(date);
  }

  if(result){
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.write(JSON.stringify(result));
  } else {
    res.writeHead(404)
  }

  response.end();
}).listen(process.argv[2]);

function parsetime(date){
  return {
      "hour": date.getHours(),
      "minute": date.getMinutes(),
      "second": date.getSeconds()
    };
}

function unixtime(date){
  return { 
    "unixtime": date.getTime() 
  };
}
