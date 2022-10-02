import express from 'express';
import cors from 'cors';


// components
import connection from './connection/db.js';
import Routes from './routes/Route.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // optional-if request url contain any unrequired spaces
app.use('/', Routes);

const PORT = 8000;

connection();

app.listen(PORT, () => console.log(`app is successfully running on port ${PORT}`))