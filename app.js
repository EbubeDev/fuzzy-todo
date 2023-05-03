const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy foodstuff", "Prepare meal"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

    var today = new Date();

    var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("view", {
        todayDate: day,
        newListItems: items
    });

});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    res.redirect("/");
});

app.listen(5050, function(){
    console.log("Server running on port 5050");
});