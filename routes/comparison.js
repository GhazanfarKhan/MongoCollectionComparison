var express = require('express');
var router = express.Router();
const Game1 = require('../models/Game1');
const Game2 = require('../models/Game2');
const differenceBy = require('lodash/differenceBy');

router.get('/', async function (req, res, next) {
  const collection1 = await Game1.find({}, { "Game_Id": 1, _id: 0 });
  const collection2 = await Game2.find({}, { "Game_Id": 1, _id: 0 });
  const intersection = differenceBy(collection2, collection1, 'Game_Id');
  res.render('comparison', { title: 'Comparison', games: intersection });

});

module.exports = router;
