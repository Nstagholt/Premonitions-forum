const port = process.env.PORT || 5000;
const express = require('express');
const cors = require ('cors');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = process.env.MONGODB_URI;
const app = express();
const diskussioner = require('./model/diskussioner');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/database', (req, res) => {
    diskussioner
        .find()
        .then(diskussioner => {
            res.json(diskussioner);
        })
})

app.post('/database', (req, res) => {
    //Indsæt i database
    const diskussion = new diskussioner( {
        name: req.body.name,
        author: req.body.author, 
        category: req.body.category  
    })
    diskussion
        .save()
        .then(createdDiskussion => {
        res.json(createdDiskussion);
    })
});

mongoose 
.connect(uri)
.then(()=>{
    app.listen(port);
    console.log("hehe");
})
.catch(err=>{console.error(err)})


