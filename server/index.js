const express = require("express");
const cors = require("cors");
const app = express();
let PORT = 4000;

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  let friends = ["Nitin", "Eric", "Cameron", "Riley"];
  res.status(200).send(friends);
})
app.get("/weather/:temperature", (req, res) => {
  const phrase = `<h3>It was ${req.params.temperature} today</h3>`;
  res.status(200).send(phrase);
})

app.listen(PORT, () => console.log(`Server running on Port ${PORT}`));
