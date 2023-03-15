const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Routes
app.use("/api/users", require("./routes/loginRoutes"));
app.use("/api", require("./routes/categoriesRoutes"));
app.use("/workers", require("./routes/workersRoutes"));
app.use("/users", require("./routes/usersRoutes"));

const constant = require("./config/constant");

app.listen(constant.PORT, console.log("app is running " + constant.PORT));
