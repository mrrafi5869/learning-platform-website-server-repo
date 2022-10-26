const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4999;

app.use(cors());

const courses = require("./data/course.json")

const premiumCourses = require('./data/Premium.json');

app.get('/', (req, res) => {
    res.send("news api is running");
})

app.get("/course", (req, res) => {
    res.send(courses);
})

app.get("/course/:id", (req, res) => {
    const id = req.params.id;
    const courseDetails = courses.find(course => course.id == id);
    res.send(courseDetails);
})

app.get('/premiumCourse',(req, res) => {
    res.send(premiumCourses)
})

app.get('/premiumCourse/:id', (req, res) => {
    const id = req.params.id;
    const premiumSingleCourse = premiumCourses.find(premiumCourse => premiumCourse.id == id);
    res.send(premiumSingleCourse);
})

app.listen(port, () => {
    console.log("Dragon News Server running on Port", port)
})