const app = require("./app")
const connectDB = require("./config/db")


connectDB()



app.listen(3000, (err) => {
    if (err) throw err;
    console.log("server is running on port number 3000")
})
