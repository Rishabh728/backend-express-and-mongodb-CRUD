const express = require("express")
const userRouter = require("./router/userRouter")

const app = express();

app.use(express.json());

app.use("/api/v1/users/", userRouter);

app.use((req, res, next) => {
    console.log("middleware called")
    next();
})

module.exports = app