const orm = require('../config/orm.js');
let music = {
  all: function(cb){
    orm.selectAll("music", function(res) {
      cb(res);
    })
  },
}

module.exports = music;
