const app = require('express').Router();
const fs = require('fs');

app.get('/notes', (req, res) => {
  fs.readFile("./db/db.json", "utf-8", function (err, notes) {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(notes));
  })
});

app.post('/notes', (req, res) => {
  console.log(req.body)
  fs.readFile("./db/db.json", "utf-8", function (err, notes) {
    if (err) {
      throw err;
    }
    let arr = JSON.parse(notes)

    arr.push(req.body)

    console.log(arr)

    fs.writeFile('./db/db.json', JSON.stringify(arr), function (err) {
      if (err) {
        throw err;
      }
      res.json(arr)
    })
  });
});

module.exports = app;