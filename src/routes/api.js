const express = require('express');

const router = express.Router();

router.get('/helloJSON', (req, res) => {
  res.json({ message: 'Hello there!' });
});

router.get('/timeJSON', (req, res) => {
  res.json({ message: new Date().toUTCString() });
});

module.exports = router;
