const orm = require('../config/orm.js');
let chosenBridalShop = {

  add: function(acctID, colID, cb ) {
    orm.insert("chosenBridalShops", "accountID", "bridalShopID", acctID, colID, function(res){
      cb(res);
    })
  },

  all: function(value, cb){
    orm.selectSpecific("chosenBridalShops", "bridal_shops", "bridalShopID", "id", "accountID", value, function(res) {
      cb(res);
    })
  },
}

module.exports = chosenBridalShop;
