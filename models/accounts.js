const orm = require('../config/orm.js');

let account = {
  login: function(userName, password, cb){
    orm.verify("accounts", "username", "password", userName, password, function(res){
      cb(res);
    })
  }
}

module.exports = account;
