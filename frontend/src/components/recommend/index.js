import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import getDiseaseInfo from './utils/filter.js'
// const getDiseaseInfo = require('./utils/filter');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/disease', (req, res) => {
    const disease = req.query.disease; // Use req.query for GET requests
    const diseaseInfo = getDiseaseInfo(disease);
    
    res.json(diseaseInfo); // Return the whole info
});

app.listen(8000, () => {
    console.log('App is listening on port 8000');
});
