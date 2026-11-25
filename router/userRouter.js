const express = require("express")
const userControlled = require("../controller/userController")

const router = express.Router();

router.route("/").get(userControlled.getUsers).post(userControlled.createUser);

router.route("/:id").get(userControlled.getSingleUser).patch(userControlled.updateUser).delete(userControlled.deleteUser)

module.exports = router;