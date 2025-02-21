//Updated API endpoints to use SQL queries

import { v4 as uuidv4 } from 'uuid';

let animals = []

//send some data to the server for the animals to be created 
export const createAnimal = app.post('/', async (req,res) => {
    try{
    console.log('POST ROUTE REACHED');
    const animal = req.body;

    const result = await db.query('INSERT INTO animales (id, common_name, scientific_name, lifespan, habitat, diet) VALUES (5, duck, duckaroo, 30, water, herbaviore)');
    animals.push({ ... animal, id: uuidv4() });

    res.send(`Animal ${animales.common_name} was added to the database`)
    } catch (error) {
        console.error('Error creating new animal: ', error);
    }

});

//to read the animals
export const getAnimals = app.get('/', async (req,res) => {
    try{
        const result = await db.query('SELECT * FROM animales;');
        res.json(result.rows);
        console.log('connected to animales database');
    } catch (error){
        console.error('error fetching animales data: ', error);
    }
});

// to find a specific animal by id 
export const getAnimal = app.get('/:id', async  (req, res) => {
    try{
    const { id } = req.params; 
    
    const result = await db.query(`SELECT * FROM animales WHERE id = 3`, [id]);

    const foundAnimal = animals.find((animal) => animal.id === id );

    res.json(result.rows[0]);
    } catch (error){
        console.error('No animal found', error);
    }
});

//delete an animal
export const deleteAnimal = app.delete('/:id', async (req, res) => {
    try{
    const { id } = req.params;

    const result = await db.query('DELETE FROM animals WHERE id = 2', [id]);

    animals = animals.filter((animal) => animal.id !== id);

    res.send(`Animal with the id ${id} has been deleted`);
    } catch (error){
        console.error(`Could not locate animal with id: ${id}: `, error);
    }
})

//animal example to add 
// {
//    "id": 20
//    "common_name": "Elephant",
//   "scientific_name": "Elephante",
//   "lifespan": 100,
//   "habitat": "savannah",
//   "diet": "herbaviore"
// }

export const updateAnimal = app.path('/:id', async (req, res) => {
    try{
    const { id } = req.params;
    
    //get properties to be updated
    const  {common_name, scientific_name, lifespan } = req.body; //take everything from the req.body

    const animalUpdate = await db.query('UPDATE animals SET scientific_name = Anatidae WHERE common_name = Elephant');


    res.send(`Animal with ${id} has been updated`)
    }
    catch (error){
        console.error('Could not find album matching id: ', error);

    }
});