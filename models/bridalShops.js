const orm = require('../config/orm.js');
let bridalShop = {
  all: function(cb){
    orm.selectAll("bridal_shops", function(res) {
      cb(res);
    })
  },
}

module.exports = bridalShop;
