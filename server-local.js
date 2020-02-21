const app = require('./express/server');
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("Local server running on ", port);
});