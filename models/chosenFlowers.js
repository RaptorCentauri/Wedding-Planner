
const orm = require('../config/orm.js');
let chosenFlower = {

  add: function(acctID, colID, cb ) {
    orm.insert("chosenFlowers", "accountID", "flowerID", acctID, colID, function(res){
      cb(res);
    })
  },

  all: function(value, cb){
    orm.selectSpecific("chosenFlowers", "flowers", "flowerID", "id", "accountID", value, function(res) {
      cb(res);
    })
  },
}
module.exports = chosenFlower;
