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

// to create a new animal 
con.connect ((function(err){
    if(err) throw err;
    console.log("Connect!");

    let sql = "INSERT INTO animals (common_name, scientific_name, lifespan, habitat, diet) VALUES ('duck', 'duckaroo', 30, 'water','herbaviore')";
    con.query(sql, function (err, result){
        if(err) throw err;
        console.log("1 record inserted");
    });
}));

//module.exports = con;