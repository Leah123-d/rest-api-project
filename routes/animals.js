import express from 'express';

import { createAnimal } from '../controllers/animals.js'
import { getAnimals } from '../controllers/animals.js'
import { getAnimal } from '../controllers/animals.js'
import { deleteAnimal } from '../controllers/animals.js'
import { updateAnimal } from '../controllers/animals.js'
 

const router = express.Router();

//all routes here are starting with /animals because it is defined in the index.js
//once we go to the animals, we'll go to the function responsible
 
router.get('/', getAnimals );

router.post('/', createAnimal );

router.get('/:id', getAnimal );

router.delete('/:id', deleteAnimal );

router.patch('/:id', updateAnimal);


export default router;