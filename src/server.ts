import express from "express";

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Namaskaaram!");
});

// the server should listen to a specific port
app.listen(port, () => {
  console.log("Server running on port: " + port);
});
