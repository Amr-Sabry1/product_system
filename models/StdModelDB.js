const mongoose = require("mongoose");

const studentShcema = new mongoose.Schema({
    name: { type: String },
    desc: { type: String },
    price: { type: Number },
    id: { type: Number },

});

const Student = mongoose.model("students", studentShcema);

module.exports = Student;
// async function getAll() {
//     let res = await Student.find();
//     console.log(res);
// }

// getAll()

// StudentModel.find({ name: "Amr Sabry" }).then((data) => {
//     console.log(data);
// });
// function addStudents(name, age) {
//   let stu = new Student({
//     name: name,
//     age: age,
//   });
//   stu
//     .save()
//     .then(() => {
//       console.log("Saved..");
//     })
//     .catch((err) => {
//       for (let e in err.errors) console.log(err.errors[e].message);
//     });
// }
// addStudents("amory", 98);

// const getAllstudents = () => {
//         return StudentModel.find();
//     }
//const getAllstudents()
//     updateAge = (id, newAge) => {
//         return StudentModel.updateOne({ _id: id }, {
//             age: newAge
//         }).exec();
//     },
// const deleteStudent = (id) => {
//     return StudentModel.deleteOne({ _id: id }).exec();
// }
// deleteStudent("6556fcb371e26df26232cbcc");
//     findById = (id) => {
//         return StudentModel.findById(id).exec();
//     },
//     searchByName = (name) => {
//         return StudentModel.find({ name: name });
//     },
//     searchByAge = (age) => {
//         return StudentModel.find({ age: age })
//     }

// module.exports = {
//     addStudents,
//     // getAllstudents,
//     // updateAge,
//     // deleteStudent,
//     // findById,
//     // searchByName,
//     // searchByAge
// }