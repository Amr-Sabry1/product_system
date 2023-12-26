const fs = require("fs")
const path = require("path")
const studentPath = path.join(path.dirname(process.mainModule.filename), "data", "Students.json")
let Students = [];
try {
    let data = fs.readFileSync(studentPath, "utf-8");
    Students = JSON.parse(data);

} catch (err) {
    console.log(`Error: ${err}`);
}
module.exports = class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    saveStudent() {
        this.id = Students.length + 1
        Students.push(this);
        writeFile();




    }

    static fetchAllstudent() {
        return Students;
    }
    static getStudentByID(id) {
        for (let i = 0; i < Students.length; i++) {
            if (Students[i].id === parseInt(id)) {
                return Students[i];
            }
        }
    }
    static deleteStudent(id) {
        for (let i = 0; i < Students.length; i++) {
            if (Students[i].id === parseInt(id)) {
                Students.splice(i, 1);
                writeFile();
                return Students;
            }
        }
    }

    static updateStudentById(id, name, age) {
        const index = Students.findIndex((x) => x.id == id);
        if (index !== -1) {

            Students[index].name = name;
            Students[index].age = age;
            writeFile()
            return Students[index];

        }


    }
};

function writeFile() {
    fs.writeFileSync(studentPath, JSON.stringify(Students));
}