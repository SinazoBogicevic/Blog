require("dotenv").config();

const express = require("express"); // CRUD functions
const path = require("path"); // node module, i didn't add it
const bodyParser = require("body-parser");
const cors = require("cors");

const log = console.log;
const PORT = process.env.PORT || 3001;
const routes = require("./routes/api");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Hello from server");
  //res.sendFile(path.join(__dirname, "dummies-guide", "public", "index.html"));
});

app.listen(PORT, () => log(`server started at port ${PORT}`));
