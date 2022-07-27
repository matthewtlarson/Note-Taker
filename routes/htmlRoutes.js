const path = require('path'); //conufsed 
const app = require('express').Router();

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html')); //dirname?
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html')); //path working?
});

module.exports = app;