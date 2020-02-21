const express = require('express');
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
/*
const server = express();


const port = process.env.PORT || 8888;

server.use(middlewares);
server.use((req, res, next) => {
   const router = jsonServer.router('db.json');
   router(req, res, next);
});

server.listen(port);

*/
const serverless = require('serverless-http');
const app = express();
app.use(middlewares);
app.use((req, res, next) => {
   const router = jsonServer.router('db.json');
   router(req, res, next);
});

module.exports.handler = serverless(app);