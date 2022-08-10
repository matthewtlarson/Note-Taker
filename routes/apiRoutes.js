const app = require('express').Router();
const fs = require('fs');


app.get('/api/notes'), (req, res) => {
  fs.readFile("./db/db.json", "utf-8", function (err, notes) {
    if (err) {
      throw err;
    }
    res.json(JSON.parse(notes));
  })
}

module.exports = app;