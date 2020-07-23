import express from "express";

const app = express();

app.listen(3000, function () {
  console.log("listening on 3000");
});

app.get("/", (req, res) => {
  res.send("Users shown");
});

app.get("/delete", (req, res) => {
  res.send("Delete user");
});

app.get("/update", (req, res) => {
  res.send("Update user");
});

app.get("/insert", (req, res) => {
  res.send("Insert user");
});
