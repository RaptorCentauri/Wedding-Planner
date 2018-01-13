const orm = require('../config/orm.js');
let chosenMusic = {

  add: function(acctID, colID, cb ) {
    orm.insert("chosenMusic", "accountID", "musicID", acctID, colID, function(res){
      cb(res);
    })
  },

  all: function(value, cb){
    orm.selectSpecific("chosenMusic", "musics", "musicID", "id", "accountID", value, function(res) {
      cb(res);
    })
  },
}
module.exports = chosenMusic;
