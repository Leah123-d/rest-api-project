const client = require('./databasepg.js')
const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("Hello World");
})

const port = 3000;
app.listen(port, () => {
  console.log(`API server is listening on PORT ${port}`)
})


