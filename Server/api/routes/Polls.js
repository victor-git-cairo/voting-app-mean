//const pollSites = require("../../models/pollsite")

const mysqldbconnection = require("../../db")

module.exports = ( router )  => {
  
  // get post information
  router.get('/polls', ( request, response ) => {
    mysqldbconnection.query('SELECT * FROM votingappdb.polls group by id', (error, rows, fields) => {
      if (!error) {
        console.log(rows);
        response.send(rows).status(200);
      }       
      else {
         console.log(error);
         response.send(error);
      }        
    })
  })
  // add/post a a new post
  router.post('/polls', (request, response) => {
    //let id = request.body.id;
    let siteNumber = request.body.siteNumber;
    let firstName = request.body.firstName;
    let lastName = request.body.lastName;
    let voteCount = request.body.voteCount;

    var sql = "INSERT INTO Polls VALUES(?,?,?,?)";
    mysqldbconnection.query(sql, [siteNumber, firstName, lastName, voteCount], (err, result) => {
      if (!err)
        response.send(result).status(201);
      else
      {
        //console.log(err);
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