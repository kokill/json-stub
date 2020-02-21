const app = require('./express');
const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log("Local server running on ", port);
});