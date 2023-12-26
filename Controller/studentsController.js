const validator = require("../util/studentValidate");
const Student = require("../models/modelStudent");

const getAllStd = (req, res) => {
    res.json(Student.fetchAllstudent());
};
const getStudentById = (req, res) => {
    let id = req.id;
    const stdd = Student.getStudentByID(id)
    if (stdd) res.json(stdd);
    else res.send("not found");
};
const createNewStd = (req, res) => {
    let valid = validator(req.body);
    if (valid) {
        let std = new Student(req.body.name, req.body.desc, req.body.price, req.body.id);
        std.saveStudent();
        res.json(req.body);
    } else {
        res.status(400).send({ error: true, message: "Invalid request" });
    }
};

const deleteStudent = (req, res) => {
    let id = req.params.id;
    const stdd = Student.deleteStudent(id);
    if (stdd) res.json(stdd);
    else res.send("not found");

};

const updateStudent = (req, res) => {
    let id = req.params.id;

    let valid = validator(req.body);
    if (valid) {
        const std = Student.updateStudentById(
            id,
            req.body.name,
            req.body.desc,
            req.body.price
        );

        res.json(std);

    } else {
        res.status(400).send({ error: true, message: "Invalid request" });
    }


};
module.exports = {
    getAllStd,
    getStudentById,
    createNewStd,
    deleteStudent,
    updateStudent,
};