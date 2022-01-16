const express = require("express");
require("./db/mongoose");
const ownerRouter = require("./routes/owner.routes");

const app = express();
const port = 2000;

app.use(express.json());
app.use(ownerRouter);

app.listen(port, () => {
  console.log("server is running in port " + port);
});
