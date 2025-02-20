//const client = require('./connection.js')
import express from 'express';
import bodyParser from 'body-parser';
import animalsRoutes from './routes/animals.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())

app.use('/animals', animalsRoutes);

//client.connect();

app.get('/', (req,res) => res.send("Hello"));



app.listen(port, () => {
  console.log(`API server is listening on PORT ${port}`)
})

