const express = require("express");
const app = express();
const cors = require('cors');
const connectDB = require("./db/db");
const userRouter = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
}));//if empty it means it can access any domain 
connectDB();

app.use("/users", userRouter);

module.exports = app    