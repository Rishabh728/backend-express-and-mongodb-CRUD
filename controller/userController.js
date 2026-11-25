const User = require("../models/userModels")

exports.getUsers = async (req, res) => {
    const user = await User.find();
    res.status(200).json({
        status: "sucess",
        data : {user}
    })
}
   
exports.createUser = async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(201).json({
        status: "sucess",
        data: {
            user
        }
    })
}

exports.getSingleUser = async (req, res ) => {
    const user = await User.findById(req.params.id)
    res.status(200).json({
        status: "Sucess",
        data: {
            user
        }
    })
}

exports.updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        req.body
        )
    res.status(200).json({
            messege:"sucess"
        })
}

exports.deleteUser = async (req, res) => {

    await User.findByIdAndDelete(req.params.id)    
    res.status(200).send({
        status: "sucessfully",
        data:"data deleted sucessfully"
    })
}