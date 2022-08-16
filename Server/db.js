//import database config file 
const config = require('./config');

//sertup connection to database
let mysqldb = require('mysql');
console.log('starting connection to database ...');
var mysqldbconnection = mysqldb.createConnection({
    host: config.db.host,  
    user: config.db.user,  // my credentials - created her and now
    password: config.db.password, // my credentials - created her and now
    database: config.db.database
});

// establish connect to the MySQL server
mysqldbconnection.connect ((error) => {
   if (error) {
      return console.error('An error has occurred: ' + error);
   }
    console.error('connected');    
    const candidates = `CREATE TABLE IF NOT EXISTS candidates(
      ID INT AUTO_INCREMENT,
      firstName VARCHAR(30) NOT NULL,
      lastName VARCHAR(30) NOT NULL,
      votes INT UNSIGNED,
      pollingplace_id INT NOT NULL, 
      party_id INT NOT NULL,
      PRIMARY KEY (ID),
      FOREIGN KEY (pollingplace_id) REFERENCES pollingplace(pollingplace_id), 
      FOREIGN KEY (party_id) REFERENCES party(party_id)
    )`;

    // Note that usually a foreign key references a primary key of another table.
    const pollingplace = `CREATE TABLE IF NOT EXISTS pollingplace(
      pollingplace_id INT,
      location VARCHAR(60)NOT NULL,
      PRIMARY KEY (pollingplace_id)
    )`;

    const party = `CREATE TABLE IF NOT EXISTS party(
      party_id INT NOT NULL,
      partyName VARCHAR(30) NOT NULL,      
      PRIMARY KEY (party_id)      
    )`;

    
    mysqldbconnection.query(candidates, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }
    });

    mysqldbconnection.query(pollingplace, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }
    });

    mysqldbconnection.query(party, (error, results, fields) => {
        if (error) {
          console.log(error.message);
        }
    });
    
      // close the connection
      // mysqldbconnection.end((error) => {
      //    if (error) {
      //      return console.log(error.message);
      //    }
      // });
 })

 module.exports = mysqldbconnection;