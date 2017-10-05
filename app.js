const express = require('express'),
      app = express(),
      path = require('path')

app.set('views', path.join(__dirname, 'views')); //use path to set the views folder
app.engine('html', require('hogan-express')); //template engine
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public'))); //./public static files

require('./routes/routes.js')(express, app);

app.listen(8081, "0.0.0.0", function () {
  console.log('Example app listening on port 8081!')
})