const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const router = require('./router');
// mongoose.Promise = require('bluebird');

const Item = require('./models/item');

const app = express();

const nodeEnv = process.env.NODE_ENV || "development";
const config = require('./config.json')[nodeEnv];

// GET /api/customer/items - get a list of items
app.get('/api/customer/items', (req, res) => {
  Item.find({}).then((items) => {
    res.json({ status: 'success', data: items });
  });
});

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});

module.exports = app;


// POST /api/customer/items/:itemId/purchases - purchase an item
// GET /api/vendor/purchases - get a list of all purchases with their item and date/time
// GET /api/vendor/money - get a total amount of money accepted by the machine
// POST /api/vendor/items - add a new item not previously existing in the machine
// PUT /api/vendor/items/:itemId - update item quantity, description, and cost
