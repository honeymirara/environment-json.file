const express = require('express');
const { getAll, getDataById, createData } = require('./service/service.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    try {
        const data = getAll();
        res.send(data);
    }
    catch (err) {
        res.send(err.message);
    }
});

app.get('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const data = getDataById(id);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});

app.post('/', (req, res) => {
    try {
        const {
            label, category, priority
        } = req.body;
        const data = createData(label, category, priority);
        res.send(data);
    } catch (err) {
        res.send(err.message);
    }
});



app.listen(3000, () => {
    console.log('server is running');
})