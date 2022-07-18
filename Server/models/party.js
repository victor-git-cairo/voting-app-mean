const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// party table has the automatic generated id disabled
let PartySchema = new Schema({
   partyName: String,  
   partyId: Number
 }, 
 { 
   _id: false
 });

module.exports = mongoose.model("Poll", PollSchema)
// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2
