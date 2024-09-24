const fs = require('fs');
const path = require('path');

const quotesPath = path.resolve(__dirname, 'data/quotes-data.json');
const jsonString = fs.readFileSync(quotesPath);
const data = JSON.parse(jsonString);
const { quotes } = data;

// PUBLIC METHODS
const getAllQuotes = () => quotes;
const getQuoteById = (id) => quotes.find((q) => q.id === id);
const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
const recentQuote = () => quotes[quotes.length - 1];

module.exports = {
  getAllQuotes, getQuoteById, randomQuote, recentQuote,
};
