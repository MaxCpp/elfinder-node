const app = require('./app');
const port = process.env.PORT || 3010;

app.listen(port, function () {
  console.log('Listening on port: ' + port);
});
