const {Client}=require('pg');

const con = new Client ({
    host:"localhost",
    user:"leahputlek",
    port:5432,
    password:"",
    database:"animals"
})

con.connect().then(() => console.log("connected"));
//module.exports = con;