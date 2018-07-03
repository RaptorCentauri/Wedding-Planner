const orm = require('../config/orm.js');

let venue = {
  all: function(cb){
    orm.selectAll("venues", function(res) {
      cb(res);
    })
  },
}

module.exports = venue;
