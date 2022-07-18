// mysql database connection
const config = require('./config');
// setup connection with mysql

let mysqldb = require('mysql');

console.log('starting connection to database ...');
var mysqldbconnection = mysqldb.createConnection({
    host: config.db.host,  
    user: config.db.user,  // my credentials - created her and now
    password: config.db.password, // my credentials - created her and now
    database: config.db.database
 })

 // connect to the MySQL server
mysqldbconnection.connect ((error) => {
   if (error) {
        return console.error('An error has occurred: ' + error);
   }
    console.error('connected');    
    const query = `create table if not exists PollS(
      id int primary key auto_increment,
      firstName varchar(255)not null,
      lastName varchar(255)not null,
      voteCount INT UNSIGNED
    )`;

    mysqldbconnection.query(query, (error, results, fields) => {
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

 



