const express = require("express");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use("/api",apiRoute);
app.use("/",htmlRoute);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});


