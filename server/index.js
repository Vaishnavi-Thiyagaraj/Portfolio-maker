var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');
var path = require('path');
const port = 3000;

const { create, defaults, rewriter, router } = require('json-server');
const rewrites = require('./routes.json');


const server = create();
const apiEndpoints = router('db2.json');

const middlewares = defaults({ logger: false });
server.use(rewriter(rewrites));
server.use(middlewares);
server.use(apiEndpoints);


var app = express();
const API_ROOT = `http://localhost:${port}/api`;

app.use(express.static(__dirname + '/../dist'));
app.use('/api', server);
var getUserData = function (req, res) {
  if(req.params.user) {
    request(`http://localhost:${port}/api/users?name=${req.params.user}`, function (error, response, body) {
      if (error || body.length === 0) {
        res.status(200).send("User not found. Please create user");
        return;
      } else {
        res.sendFile(path.join(__dirname + '/../dist/index.html'));
      }
    });
  } else {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  }};
app.get('/', getUserData);
app.get('/edit', getUserData);

app.listen(3000, function (error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up %s in your browser.', port, API_ROOT);
  }
});