const express = require('express');
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const path = require('path');
const serverless = require('serverless-http');
const app = express();

app.use(middlewares);
app.use('public', express.static(path.join(process.cwd(), 'public')));
app.get('/health', (req, res) => {
   res.status(200).send({success: true});
});
app.use((req, res, next) => {
   const router = jsonServer.router('public/db.json');
   router(req, res, next);
});
module.exports = app;
module.exports.handler = serverless(app);