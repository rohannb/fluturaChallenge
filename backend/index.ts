import express from 'express';
const students = require('./data/students.json');
const houses = require('./data/houses.json');
const app = express();
const cors = require('cors')

app.use(cors());
app.get('/getStudents', (req, res) => {
    const id = req.query.id;
    if (!id) res.send(students);
    res.send(students.filter(student => student.houseId == id));
})

app.listen(3000);