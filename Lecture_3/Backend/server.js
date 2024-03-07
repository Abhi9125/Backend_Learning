// Step - 1 import the express from node module.
const express = require("express");

// step 2 - assign express into a varibale or server app.
const app = express();

// Step -3 requesting on root server
// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

app.get("/jokes", (req, res) => {
  res.send([
    {
      id: 1,
      title: "jock 1",
      content: "I am 1st joke",
    },
    {
      id: 2,
      title: "jock 2",
      content: "I am 2nd joke",
    },
    {
      id: 3,
      title: "jock 3",
      content: "I am 3rd joke",
    },
    {
      id: 1,
      title: "jock 4",
      content: "I am 4th joke",
    },
    {
      id: 5,
      title: "jock 5",
      content: "I am 5th joke",
    },
  ]);
});

// step - 4 = Creating a port
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running of http://localhost:${port}`);
});
