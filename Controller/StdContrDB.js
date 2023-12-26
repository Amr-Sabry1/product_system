const Student = require("../models/StdModelDB")

let addStudents = (req, res) => {
    let std = new Student({
        name: req.body.name,
        price: req.body.price,
        desc: req.body.desc,
        id: req.body.id,
    });
    std.save().then(() => {
        res.send("addedd")
    }).catch((err) => {
        for (let e in err.errors) console.log(err.errors[e].message);
        res.status(400).send("errrr")
    })
}

let getStdByID = async(req, res) => {

    try {
        let std = await Student.find({ id: req.params.id })
        if (!std) return res.status(400).send("Student not found");
        else res.send(std)
    } catch (err) {
        for (let e in err.errors) console.log(err.errors[e].message);
        res.status(400).send("errrr")
    }
}

let getAllStd = async(req, res) => {
    try {
        let std = await Student.find()
        res.send(std)
    } catch (err) {
        for (let e in err.errors) console.log(err.errors[e].message);
        res.status(400).send("errrr")
    }
}
let updateStd = async(req, res) => {
    try {
        let std = await Student.findOneAndUpdate({ id: req.params.id }, req.body)
        if (!std) return res.status(400).send("Student not found");
        else res.send("updated")
    } catch (err) {
        for (let e in err.errors) console.log(err.errors[e].message);
        res.status(400).send("errrr")
    }
}
let deleteStd = async(req, res) => {
    try {
        let std = await Student.deleteOne({ id: req.params.id });
        if (!std) return res.status(400).send("Student not found");
        else res.send('Deleted')
    } catch (err) {
        for (let e in err.errors) console.log(err.errors[e].message);
        res.status(400).send("errrr")
    }
}



module.exports = {
    addStudents,
    getStdByID,
    getAllStd,
    updateStd,
    deleteStd,
};