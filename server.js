const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectSSI = require('connect-ssi');
const path = require('path');

const mongoose = require('mongoose');

const server = express();

// const apiRouter = require('./common/apiRouter.js');
server.use(bodyParser.json());
server.use(cors());
server.use(connectSSI({
  baseDir: path.join(__dirname, '/public'),
}));

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.shtml'));
});

/* *** Plumbing *** */
/* eslint-disable no-console */
mongoose.Promise = global.Promise;
mongoose
  .connect('mongodb://localhost:27017', { useMongoClient: true })
  .then(() => {
    const port = 3000;
    server.listen(port, () => {
      console.log(`server running on port ${port}!`);
    });
  })
  .catch((err) => {
    console.error('database connection failed:', err.message);
  });

module.exports = { server };
