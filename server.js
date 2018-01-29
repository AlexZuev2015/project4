/*написать в терминале node server.js & disown %1, 
тогда после закрытия терминала, сервер будет работать.*/

var http = require("http");
var dem = require ( ' daemon ' ) ( ) ;
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);