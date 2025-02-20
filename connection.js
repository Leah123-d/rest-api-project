const {Client}=require('pg');

const con = new Client ({
    host:"localhost",
    user:"leahputlek",
    port:5432,
    password:"",
    database:"postgres"
})

con.connect().then(() => console.log("connected"));

//to CREATE a new animal
//let createSQL = "INSERT INTO animals (common_name, scientific_name, lifespan, habitat, diet) VALUES ('bird', 'birdman', 30, 'desert','herbaviore')";

//to READ animals 
// let readSQL = "SELECT * FROM animals";

//to UPDATE an existing animal 
//let udpateSQL = "UPDATE animals SET scientific_name = 'Anatidae' WHERE common_name = 'duck'";


//to DELETE an existing animal
let deleteSQL = "DELETE FROM animals WHERE common_name = 'cat'";

 con.query(deleteSQL, (err,res) =>{
     if(!err){

         console.log(res.rows);
     }
     else{
         console.log(err.message);
     }
     con.end
 });


module.exports = con;
