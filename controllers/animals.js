import { v4 as uuidv4 } from 'uuid';

let animals = []

export const createAnimal = (req,res) => {
    console.log('POST ROUTE REACHED');

    const animal = req.body;

    animals.push({ ... animal, id: uuidv4() })

    res.send(`Animal ${animal.common_name} was added to the database`)

} //send some data to the server for the animals to be created 

export const getAnimals =  (req,res) => {
    console.log(animals);
    res.send(animals)
}

export const getAnimal =  (req, res) => {
    const { id } = req.params; 

    const foundAnimal = animals.find((animal) => animal.id === id );

    res.send(foundAnimal);
}

export const deleteAnimal = (req, res) => {
    const { id } = req.params;

    animals = animals.filter((animal) => animal.id !== id);

    res.send(`User with the id ${id} has been deleted`);
}

export const updateAnimal = (req, res) => {
    const { id } = req.params;
    //what can we receive 

    const  { common_name, scientific_name, lifespan } = req.body; //take everything from the req.body

    const animalUpdate = animals.find((animal) => animal.id === id);

    //need to add the things we want to replace as well as select the animal based on the uuid 

    //these are the properties the user can update 
    if(common_name){
        animalUpdate.common_name = common_name;
    }
    if(scientific_name){
        animalUpdate.scientific_name = scientific_name;
    }
    if(lifespan){
        animalUpdate.lifespan = lifespan;
    }

    res.send(`User with ${id} has been updated`)
}