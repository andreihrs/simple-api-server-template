const express = require("express");
const { json } = require("body-parser");
const data = require("./upwork.json");
const cors = require("cors");

const app = express();
app.use(json());
app.use(cors());

const router = express.Router();

router.get("/data.json", (req, res) => {
  res.send(data);
});

app.use(router);

app.listen(4001, () => {
  console.log("Listening on port 4001");
});
