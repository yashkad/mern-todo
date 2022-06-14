const connection = require("./db");
const taskAddRouter = require("./routes/tasks");
const cors = require("cors");
const express = require("express");
const app = express();

const corsOption = {
  origin: "http://localhost:3000",
  credentials: true,
};

app.use(cors(corsOption));
app.use(express.json());

connection();
app.use("/api/tasks", taskAddRouter);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listining on port ${port}`));
