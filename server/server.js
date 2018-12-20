const express = require("express"),
  path = require("path"),
  compression = require("compression");

const app = express();

app.use(compression());

//HOSTING

app.use(express.static(`${__dirname}/../build`));

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *");
});

app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(3300, () => console.log("Working on port 3333"));
