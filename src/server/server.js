const express = require("express");
const app = express();
const {dictionary} = require('./data');

app.use(express.json());

app.get("/book", (req, res)=>{
  res.json(dictionary.book);
});
// console.log(dictionary);

app.get("/octopus", (req, res)=>{
  res.json(dictionary.octopus);
});



app.listen(8000, () => console.log("Listening on port 8000"));
