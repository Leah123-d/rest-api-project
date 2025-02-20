import express from 'express';
import { v4 as uuidv4 } from 'uuid';
 

const router = express.Router();

const animals = [
    {common_name:"Emerald green tree boa",scientific_name:"Boa caninus",lifespan:76,habitat:"savannah",diet:"carnivore"},
    {common_name:"Ostrich",scientific_name:"Struthio camelus",lifespan:83,habitat:"savannah",diet:"carnivore"},
    {common_name:"Jaguar",scientific_name:"Panthera onca",lifespan:28,habitat:"tundra",diet:"herbivore"},
    {common_name:"Tortoise, desert",scientific_name:"Gopherus agassizii",lifespan:64,habitat:"desert",diet:"herbivore"}
    
]

//all routes here are starting with /animals because it is defined in the index.js
router.get('/', (req,res) => {
    console.log(animals);
    res.send(animals)
});

router.post('/', (req,res) => {
    console.log('POST ROUTE REACHED');

    const animal = req.body;

    animals.push({ ... animal, id: uuidv4() })

    res.send(`Animal ${animal.common_name} was added to the database`)

}); //send some data to the server for the animals to be created 



export default router;