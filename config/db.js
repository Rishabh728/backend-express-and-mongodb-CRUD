const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/userModal")
    console.log("mongodb connected sucessfully ")
}

module.exports = connectDB