const {Client, Pool} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "rootUser",
    database: "postgres"
})

client.query("INSERT INTO company(id,name,age)values(5,'karthick',25)",(err,res)=>{
    console.log(err,res)
    client.end()
});

// connection to postgresqul and localhost on localsystem
// creating new client that client connected in local host