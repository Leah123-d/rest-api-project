const {Client}=require('pg');

const con = new Client ({
    host:"localhost",
    user:"leahputlek",
    port:5432,
    password:"",
    database:"postgres"
})

//con.connect().then(() => console.log("connected"));

// con.query('select * from animals',(err,res) =>{
//     if(!err){

//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     con.end
// })

// to CREATE a new animal - maybe I will break this up to their own files? 
// con.connect ((function(err){
//     if(err) throw err;
//     console.log("Connect!");

//     let sql = "INSERT INTO animals (common_name, scientific_name, lifespan, habitat, diet) VALUES ('duck', 'duckaroo', 30, 'water','herbaviore')";
//     con.query(sql, function (err, result){
//         if(err) throw err;
//         console.log("1 record inserted result.body"); //double check this to see how I can get what I inserted to return in the console too 
//     });
// }));

//to UPDATE an existing animal 

con.connect((function(err) {
    if (err) throw err; 
    console.log("error!");

    let sql = "UPDATE animals SET scientific_name = 'Anatidae' WHERE common_name = 'duck'";

    con.query(sql, function (err, result){
        if (err) throw err;
        console.log(result.affectedRows + `record(s) updated`); //figure out how to get this message more clear
    })
}))


//module.exports = con;