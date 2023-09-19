const fs = ('fs');
const express = ('express');

const http = require ('http');
const port = 8080;
const menssage = 'Estas concetado con exito al puerto:' + port;
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(menssage);
});

server.listen(port, () => {
        console.log('Estas escuchando al puerto:', port);
});



