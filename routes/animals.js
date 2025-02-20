import express from 'express'; 

const router = express.Router();

//all routes here are starting with /animals because it is defined in the index.js
router.get('/', (req,res) => {
    res.send('Hello from router')
});

export default router;