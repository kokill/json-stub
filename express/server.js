const express = require('express');
const jsonServer = require('json-server');
const middlewares = jsonServer.defaults();
const path = require('path');
const serverless = require('serverless-http');

// const jsonRouter = jsonServer.router('/db.json');
const app = express();

const router = express.Router();
app.use(middlewares);

// app.use('public', express.static(path.join(process.cwd(), 'public')));
router.get('/', (req, res) => {
   res.status(200).send({success: true});
});
app.use('/.netlify/functions/health', router);
// app.use('/.netlify/functions/server', jsonRouter);

module.exports = app;
module.exports.handler = serverless(app);