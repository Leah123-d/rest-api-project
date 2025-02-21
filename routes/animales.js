//Updated API endpoints to use SQL queries
import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import server from '../server.js'

const router = express.Router();

//send some data to the server for the animals to be created 

router.post('/', async (req,res) => {
    try{
    console.log('POST ROUTE REACHED');
    const { id, common_name, scientific_name, lifespan, habitat, diet } = req.body;

    const result = await server.query(
        'INSERT INTO animales (id, common_name, scientific_name, lifespan, habitat, diet) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
        [uuidv4(), common_name, scientific_name, lifespan, habitat, diet]
    );
    console.log(result);
    //using parameterized quries to prevent SQL injection

    res.send(`Animal ${result.rows[0].common_name} was added to the database`)
    } catch (error) {
        console.error('Error creating new animal: ', error);
    }

});

//to read the animals
router.get('/', async (req,res) => {
    try{
        const result = await server.query('SELECT * FROM animales;');
        res.json(result.rows);
    } catch (error){
        console.error('error fetching animales data: ', error);
    }
});

// to find a specific animal by id 
router.get('/:id', async  (req, res) => {
    try{
    const { id } = req.params; 
    
    const result = await server.query(`SELECT * FROM animales WHERE id = $1`, [id]);

    if(result.rows.length === 0){
        return res.send('Animal not found');
    }

    res.json(result.rows[0]);
    } catch (error){
        console.error('No animal found', error);
    }
});

//delete an animal
router.delete('/:id', async (req, res) => {
    try{
    const { id } = req.params;

    const result = await server.query('DELETE FROM animales WHERE id = $1 RETURNING *', [id]);

    if(result.rowCount === 0){
        return res.send('Animal not found');
    }

    res.send(`Animal with the ID: ${id} has been deleted`);
    } catch (error){
        console.error(`Could not locate animal with id: ${id}: `, error);
    }
})

//animal example to add 
// {
//    "common_name": "Elephant",
//   "scientific_name": "Elephaus",
//   "lifespan": 20,
//   "habitat": "savannah",
//   "diet": "herbaviore"
// }
// {
//    "common_name": "Kangaroo",
//   "scientific_name": "Macropus",
//   "lifespan": 50,
//   "habitat": "ocean",
//   "diet": "carnivore"
// }

router.patch('/:id', async (req, res) => {
    try{
        const { id } = req.params;
        
        //get properties to be updated
        const  {common_name, scientific_name, lifespan, habitat, diet } = req.body; //take everything from the req.body

        const result = await server.query(
            'UPDATE animales SET common_name = $1, scientific_name = $2, lifespan = $3, habitat = $4, diet = $5 WHERE id = $6 RETURNING *',
            [common_name, scientific_name, lifespan, habitat, diet, id]);

        if(result.rowCount === 0){
            return res.send('Animal not found');
        }


        res.send(`Animal with ${id} has been updated`)
        }
        catch (error){
            console.error('Could not find animal matching id: ', error);

        }
    });

export default router;

