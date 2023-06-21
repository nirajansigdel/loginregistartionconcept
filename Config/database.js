// const mysql = require("mysql");

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "loginproject"
// })
// connection.connect((err) => {
//     if (err) {
//         console.log("error in database connection", err)
//     }
//     console.log("sucessfully database connected")
// })
// module.exports = {
//     connection,
// }
const mysql=require("mysql");

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"rdsystem"
})

connection.connect((err)=>{
    if(err){
        console.log("database connection error")
    }
    console.log("database connect sucessfully")
})
module.exports={
    connection,
}