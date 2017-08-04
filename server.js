var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;

//use files linked on index.html
app.use(express.static(__dirname + '/'));

//send homepage
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
