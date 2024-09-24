const express = require('express');

const port = 3000;

const path = require('path');

const filePath404Page = path.resolve(__dirname, '../client/404.html');

const app = express();

// import routes (put this near top)
const indexRouter = require('./routes/index.js');
const quotesRouter = require('./routes/quotes.js');
const apiRouter = require('./routes/api.js');

app.use(express.static('client'));

// app.all('*', (req, res) => {
//   res.status(404).sendFile(filePath404Page);
//   //res.redirect('/404.html')
// });

// use routes (put this near the bottom, BEFORE app.listen()
app.use('/', indexRouter);
app.use('/quotes', quotesRouter);
app.use('/api', apiRouter);

// this is the LAST route, right before app.listen()
app.use((req, res) => {
  res.status(404).sendFile(filePath404Page);
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
