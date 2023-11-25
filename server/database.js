const mysql = require('mysql');

const conecction = mysql.createConnection({
    host: "mysql-karen04.alwaysdata.net",
    user: "karen04",
    password: "Osita123",
    database: "karen04_prueba",
});

conecction.connect((error) => {
    if(error){
        console.log("Error al conectarse a la base de datos", error);
    }else{
        console.log("Conexión exitosa a la base de datos");
    }
});

module.exports = conecction;