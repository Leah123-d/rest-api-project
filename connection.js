const {Client}=require('pg');

const con = new Client ({
    host:"localhost",
    user:"leahputlek",
    port:5432,
    password:"",
    database:"postgres"
})

con.connect().then(() => console.log("connected"));

con.query('select * from animals',(err,res) =>{
    if(!err){

        console.log(res.rows);
    }
    else{
        console.log(err.message);
    }
    con.end
})
//module.exports = con;