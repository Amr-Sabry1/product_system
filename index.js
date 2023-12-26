const express = require("express");
const compression = require("compression")
const studentrouter = require('./routes/students')
const cors = require("cors")
const mongoose = require("mongoose");
const app = express();
app.use(compression())
const port = process.env.PORT || 5000;
const path = require("path");
mongoose
    .connect(
        "mongodb+srv://AmrSabry:tonystark0000@cluster0.crz6rml.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((conn) => {
        console.log(`connected ${conn.connection.host}`);
    })
    .catch((err) => {
        console.log(err);
    });
app.use(cors())

app.use("/api/product", studentrouter);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/welcome.html", (req, res) => {
    console.log(req.query.fn);
    console.log(req.query.ln);
    res.sendFile(path.join(__dirname, "/welcome.html"));
});

app.post("/welcome.html", (req, res) => {
    res.send(`thank ${req.body.fn} ${req.body.ln}`);
});


app.listen(port, () => {
    console.log(`listen to ${port}`);
});