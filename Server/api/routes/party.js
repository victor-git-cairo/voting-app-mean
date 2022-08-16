//import mysqldb connection - TESTED
const mysqldbconnection = require("../../db");

//party Api endpoints
module.exports = (router) => {
  // get all Parties
  router.get('/party', (request, response) => {
    mysqldbconnection.query('select * from votingappdb.party', (error, rows, fields) => {
      if (!error) {
        console.log(rows);
        response.send(rows).status(200);
      }
      else {
        console.log(error);
        response.send(error);
      }
    })
  });

  //post a new party 
  router.post('/party', (request, response) => {
    //let id = request.body.id;
    let partyId = request.body.partyId;
    let partyName = request.body.partyName;

    var sql = "insert into party values( ?, ? )";
    mysqldbconnection.query( sql, [ partyId, partyName], ( err, result ) => {
      if ( !err )
        response.send(result).status(201);
      else {
        console.log( err );
        response.send( err );
      }
    });
  });

  //get party information by Id
  router.get('/party/:id', (request, response) => {
    if (isNaN(request.params.id))
      return response.status(400).send(`No record with given id ${request.params.id}`);

    console.log(request.params.id);
    mysqldbconnection.query('select * from party where party_Id = ?', [request.params.id], (error, rows, fields) => {
      if (!error)
        response.send(rows).status(200);
      else
        console.log(error);
    })
  });

  // delete party record
  router.delete('/party/:id', (request, response) => {
    if (isNaN(request.params.id))
      return response.status(400).send(`No record found for ${request.params.id}`);

    mysqldbconnection.query('delete from party where party_Id = ?', [request.params.id], (err, rows, fields) => {
      if (!err)
        response.send('Your item was successfully deleted!').status(200);
      else
        console.log( err );
    })
  });

  // update party information
  router.put('/party/:id', (request, response) => {
    if (isNaN(request.params.id))
      return response.status(400).send(`No record found for ${request.params.id}`);

    let id = request.params.id;
    let partyUpdate = request.body.partyUpdate;

    var sql = "update party set partyName = ? where party_id = ?";
    mysqldbconnection.query( sql, [ partyUpdate, id], (err, result) => {
      if (!err)
        response.send(result).status(200);
      else
        console.log(err);
    })
  });
}