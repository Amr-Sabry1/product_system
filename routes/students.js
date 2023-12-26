const express = require("express");
const route = express.Router()
const ApiStd = require("../Controller/StdContrDB")
    // const Studentvalid = require("../middlewares/StudentValidatorMW")
route.use(express.json());
route.use(express.urlencoded({ extended: true }));



route.param("id", (req, res, nxt, val) => {
    if (val) {
        req.id = val;
        nxt();
    } else {
        res.status(400).send("Invalid ID");
        nxt();
    }
});

//get all  student
route.get("/", ApiStd.getAllStd);
//get student by id


route.get("/:id", ApiStd.getStdByID);
//Create new student
route.post("/", ApiStd.addStudents);

//delete student
route.delete("/:id", ApiStd.deleteStd);
//update student
route.put("/:id", ApiStd.updateStd);

module.exports = route;