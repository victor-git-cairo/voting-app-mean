//import mysqldb connection
const mysqldbconnection = require("../../db");

module.exports = ( router )  => {  
  // GET candidates endpoint
  router.get('/candidates', ( request, response ) => {
    mysqldbconnection.query('select * from votingappdb.candidates order by ID', (error, rows, fields) => {
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

  // POST New Candidate
  router.post('/candidate', (request, response) => {
    //let ID = request.body.id;
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let votes = request.body.votes;
    let pollingPlaceId = request.body.pollingPlaceId;
    let partyId = request.body.partyId;    

    var sql = "insert into candidates values(null,?,?,?,?,?)";
    mysqldbconnection.query(sql, [firstName,lastName,votes,pollingPlaceId,partyId], (err, result) => {
      if (!err)
        response.send(result).status(201);

      {
        console.log(err);
        response.send(err);
      }
    })
  });
  
  // get information for the selected poll
  router.get('/polls/:id', (request, response) => {
    if (isNaN(request.params.id))
      return response.status(400).send(`No record with given id ${request.params.id}`);

   console.log(request.params.id); 
    mysqldbconnection.query('SELECT * FROM Polls WHERE Id = ?', [request.params.id], (error, rows, fields) => {
      if (!error)
        response.send(rows).status(200);
      else
        console.log(error);
    })
  })

  // delete the selected poll
  router.delete('/polls/:id', ( request, response ) => {
    if (isNaN(request.params.id))
      return response.status(400).send(`No record with given id ${request.params.id}`);

     mysqldbconnection.query('DELETE FROM Polls WHERE Id = ?', [request.params.id], (err, rows, fields) => {
       if (!err)
         response.send('Deleted successfully').status(200);
       else
         console.log(err);
     })
  })
  
  // update a vote count per participant
  router.put('/poll/:id', (request, response) => {  
    if (isNaN(request.params.id))
    return response.status(400).send(`No record with given id ${request.params.id}`);

    let id = request.params.id;    
    let voteCount = request.body.voteCount;

    var sql = "UPDATE Polls SET voteCount = ? WHERE id = ?";
    mysqldbconnection.query(sql, [voteCount, id], (err, result) => {
      if (!err)
        response.send(result).status(200);
      else
        console.log(err);
    })
  })
}