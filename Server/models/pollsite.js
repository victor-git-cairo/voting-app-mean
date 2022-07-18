const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// pollSite table has 1 to many relationship with candidate table
let PollSiteSchema = new Schema({
  pollSiteid: Number,
  pollName: String,
  candidateSiteId: {
      type: Number,
      ref: "candidate"
  }  
},{
  _id: false
});

module.exports = mongoose.model("PollSite", PollSiteSchema);
// https://medium.com/@brandon.lau86/one-to-many-relationships-with-mongodb-and-mongoose-in-node-express-d5c9d23d93c2