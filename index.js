import express from 'express';
import bodyParser from 'body-parser';
//import animalsRoutes from './routes/animals.js';
import server from 'server.js';
import animales from 'animales.js';


const app = express();
const port = 3000;

app.use(bodyParser.json())

app.get('/', (req,res) => res.send("Hello")); //test connection to the home page

//app.use('/animals', animalsRoutes); // I think this is how I will be able to access the routes 

app.use('/animals', createAnimal); 
app.use('/animals', getAnimals); 
app.use('/animals', getAnimalById); 
app.use('/animals', updateAnimal); 
app.use('/animals', deleteAnimal); 




app.listen(port, () => {
  console.log(`API server is listening on PORT ${port}`)
})

