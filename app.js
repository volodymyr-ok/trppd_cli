const express = require('express');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const subscriptionRouter = require('./routes/api/subscription/subscription');

const app = express();

const loggersFormat = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(loggersFormat));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/subscription', subscriptionRouter);

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, _, res, __) => {
  console.log('Server error');
  const { status = 500, message = 'Server error' } = err;
  res.status(status).json({ message });
});

module.exports = app;
