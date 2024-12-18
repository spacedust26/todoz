const express = require("express");
const port = 3000;
const app = express();
app.use(express.json());

app.post("/todo", function (req, res) {

})

app.get("/todos", function (req, res) {

})

app.put("/completed", function (req, res) {

})

app.listen(port);