const express = require("express");
const studentController = require("../controllers/studentController");
const jwtController = require("../controllers/JWTController")


const router = express.Router();

/////practice routes

router.post("/InsertStudent", studentController.InsertStudent);
router.get("/readStudent", studentController.readStudent);
router.post("/updateStudent/:id", studentController.updateStudent);
router.get("/deleteStudent/:id", studentController.deleteStudent);





module.exports = router;