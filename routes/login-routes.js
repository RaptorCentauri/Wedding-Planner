// var db = require('../models');
const account = require('../models/accounts.js');

// const expressSession = require('express-session');

module.exports = function(app) {

  app.get("/login",function(req, res) {
    console.log(req.body);
  });

  app.post("/login", function(req, res) {
    account.login(req.body.username, req.body.password, function(result){
      if(result.length != 0){
        req.session.username = req.body.username;

        console.log(req.connection);

        console.log(`===================================================================================================`);
        console.log(`USER: "${req.session.username}" has logged in on IP ADDRESS: "${req.ip}"`);
        console.log(`===================================================================================================`);
        res.json(result);
      }
      else {
        console.log(`===================================================================================================`);
        console.log(`IP ADDRESS: "${req.ip}" has tried to log in with invalid credentials!`);
        console.log(`===================================================================================================`);
        // console.log("does not exist");
      }
    });
  });

}
