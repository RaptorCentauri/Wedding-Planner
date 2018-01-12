
const orm = require('../config/orm.js');
let chosenVenue = {

  add: function(acctID, venID, cb ) {
    orm.insert("chosenVenues", "accountID", "venueID", acctID, venID, function(res){
      cb(res);
    })
  },

  all: function(value, cb){
    orm.selectSpecific("chosenVenues", "venues", "venueID", "id", "accountID", value, function(res) {
      cb(res);
    })
  },
}

module.exports = chosenVenue;
