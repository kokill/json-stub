const express = require('express');
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();

const serverless = require('serverless-http');
const app = express();
app.use(middlewares);
app.use((req, res, next) => {
   const router = jsonServer.router('db.json');
   router(req, res, next);
});
module.exports = app;
module.exports.handler = serverless(app);