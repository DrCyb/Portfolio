const express = require("express");
app = express();
const bodyParser = require("body-parser");
const hbs = require('hbs');
const PORT = process.env.PORT || 3000;

// public Folder einbinden
app.use("/public", express.static(__dirname + "/public"));

// template engine Handlebars werden eingebunden
app.set('view engine', 'hbs');

app.get("/", (req, res) => {
  res.render("index", {}, (err, html) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(html);
  });
});

/* app.post("/#contact", (req, res) => {
  res.render("submit", {}, (err, html) => {
    if (err) {
      console.log(err);
      res.send(err);
    }
    res.send(html);
  });
}); */
/* app.post('/', (req, res)=> {
  res.send('Got a POST request');
});
 */


// listen the server
app.listen(PORT, () => {
  console.log("Server is running on port number" + PORT);
});
