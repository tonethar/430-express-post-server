const express = require('express');

const router = express.Router();

const db = require('../db.js');

const data = db.getAllQuotes();

router.get('/', (req, res) => {
  const { id } = req.query;
  // console.log(`id=${id}`);
  // console.log('req.query=', req.query);
  if (!id) {
    res.json(data);
    return;
  }

  const quote = db.getQuoteById(id);
  if (quote) {
    res.json(quote);
  } else {
    res.json({});
  }
});

router.get('/random', (req, res) => res.json(db.randomQuote()));

router.get('/recent', (req, res) => res.json(db.recentQuote()));

router.get('/:id', (req, res) => {
  const { id } = req.params;
  // console.log(`id=${id}`);
  if (!id) {
    res.json(data);
    return;
  }

  const quote = db.getQuoteById(id);
  if (quote) {
    res.json(quote);
  } else {
    res.json({});
  }
});

module.exports = router;
