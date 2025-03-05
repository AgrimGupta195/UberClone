const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./db/db");
const userRouter = require("./routes/user.routes");
app.use(cors());//if empty it means it can access any domain 
connectDB();
app.get("/", (req, res) => {
    res.send("Hello World");
})
app.use(express.json());
app.use("/users", userRouter);

module.exports = app    