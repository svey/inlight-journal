const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const journalRouter = require('./routes/journal-route');
const path = require('path');

const PORT = process.env.PORT || 4001;
const app = express();
const buildPath = path.join(__dirname, 'build');
const clientPath = path.join(__dirname, 'build', 'index.html');

// must be above routes
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/journal', journalRouter);
app.use(express.static(buildPath));

app.get('*', function (req, res) {
  res.sendFile(clientPath);
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('inlight journal is feeling red right now...');
});

app.use(function (req, res, next) {
  res.status(404).send('inlight journal is feeling yellow right now...');
});

app.listen(PORT, function () {
  console.log(`inlight journal is feeling green at ::${PORT}`);
});
