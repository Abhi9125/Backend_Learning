require("dotenv").config();
// Importing the express from node_module
const express = require("express");

// calling the express() function
const app = express();

// giving the port where run our server
const port = 4000;

// requesting
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/browse", (req, res) => {
  res.send("You are on the Browser Page.");
});

/***When we update or add new req and server is start previously so
 * first we stop the server and then again start the server.
 */
app.get("/youtube", (req, res) => {
  res.send("<h1>Chai aur code.</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
