const express = require("express");
const cors = require("cors");
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());
const PORT= 9000

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`server started ${PORT}`);
});
