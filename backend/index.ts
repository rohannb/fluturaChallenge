import express from 'express';
const fs = require('fs');
let students = require('./data/students.json');
const houses = require('./data/houses.json');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.get('/getStudents', (req, res) => {
    const id = req.query.id;
    if (!id) res.send(students);
    res.send(students.filter(student => student.houseId == id));
})

app.post('/registerStudent', (req, res) => {
    if (!req.body.name || !req.body.houseId || !req.body.id) return res.status(400).send(`Name, id and house id are mandatory`)
    students.push(req.body)
    writeStudentsJson();
    res.status(200);
})

app.put('/updateStudent', (req, res) => {   //should allow to remove address
    const id = req.query.id, body = req.body;
    if (!id) res.send(`id is required`).status(400);
    let index = students.findIndex((obj => obj.id == id));
    for (let key of Object.keys(body)) {
        students[index][key] = body[key];
    }
    writeStudentsJson();
    res.send(`Student updated successfully`).status(200);
})

app.post('/registerHouse', (req, res) => {
    if (!req.body.name || !req.body.id) return res.status(400).send(`Name and id are mandatory`)
    houses.push(req.body)
    writeHousesJson();
    res.status(200);
})

app.post('/addStudentsToHouse', (req, res) => {
    if (!req.query.houseId) res.status(400).send(`houseId is required`);
    const houseId = typeof req.query.houseId == `string` ? parseInt(req.query.houseId) : ``;
    const ids: [] = req.body.ids;
    ids.forEach(id => students[students.findIndex(obj => obj.id == id)].houseId = houseId)
    writeStudentsJson();
    return res.status(200);
})

let writeStudentsJson = () => fs.writeFileSync(`./data/students.json`, JSON.stringify(students));
let writeHousesJson = () => fs.writeFileSync(`./data/houses.json`, JSON.stringify(houses));

app.listen(3000);