import express from 'express';
import { v4 as uuidv4 } from 'uuid';
 

const router = express.Router();

let animals = [

    
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

router.get('/:id', (req, res) => {
    const { id } = req.params; 

    const foundAnimal = animals.find((animal) => animal.id === id );

    res.send(foundAnimal);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;


    animals = animals.filter((animal) => animal.id !== id);

    res.send(`User with the id ${id} has been deleted`)
})


export default router;