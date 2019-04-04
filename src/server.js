const http = require('http');
const serverPort = 3000;
const fs = require('fs');

const server = http.createServer((req,res) => {
  // console.log(req);
  const url = req.url;
  const method = req.method;
  if(url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first server </title></head>');
    res.write('<body> <h1> Home Page </h1><body>');
    res.write('<html/>');
    return res.end();
  }
  if(url === '/projects'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first server </title></head>');
    res.write('<body> <h1> Projects Page </h1><body>');
    res.write('<form action="/submitted" method="POST"><input name="messge" type="text"></input><button type="submit">Submit</button></form>')
    res.write('<html/>');
    return res.end();
  }
  if(url === "/submitted" && method === 'POST'){
    fs.writeFileSync('messages.txt', 'Lorem ipsum');
    res.statusCode = 302;
    res.setHeader('Location', '/SubmittedMessage');
    return res.end();
  }
  if(url === "/SubmittedMessage"){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head> <title> My first server </title></head>');
    res.write('<body> <h1> Thank You ! </h1><body>');
    res.write('<html/>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head> <title> My first server </title></head>');
  res.write('<html/>');
  res.end();
});
server.listen(serverPort);
console.log('Server running on port :' + serverPort);
