var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require ("method-override");
var exphbs =require("express-handlebars");


var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded ({
    extended: false
}));

app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({
    defaultLayouts: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/routes.js");

app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
