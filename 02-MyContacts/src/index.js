const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("hello world");
});
app.listen(3000, () => console.log("servidor on fire, http://localhost:3000"));
