const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// poll table has 1 to many relationship with the party table
let candidateSchema = new Schema({
  firstName: String,
  lastName:  String,
  voteCount: Number,
  pollName: String,
  candidatePartyId: {
      type: Number,
      ref: "Party"
  }  
},{
    _id: Number
});
module.exports = mongoose.model("candidate", candidateSchema)
// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2