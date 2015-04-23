var http = require('http'),
fs = require('fs'),
port_num = process.argv[2],
file_path = process.argv[3];

http.createServer(function(request, response){
  response.writeHead(200, { 'content-type': 'text/plain' })

  file_buffer = fs.createReadStream(file_path);

  file_buffer.pipe(response);

  // 不需要手动 end pipe 会触发的
  // file_buffer.on('end', function() {
  //   response.end();
  // });
}).listen(port_num);