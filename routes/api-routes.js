// const account = require('../models/accounts.js');
const bridalShop = require('../models/bridalShops.js');
const flower = require('../models/flowers.js');
const music = require('../models/music.js');
const venue = require('../models/venues.js');

module.exports = function(app) {

//=======================================================================================================================================================================
//VENUE ROUTES
//=======================================================================================================================================================================

//get all venues
app.get(`/api/venues/`, function(req, res){
  venue.all(function(result) {
    res.json(result);
  });
});

//=======================================================================================================================================================================
//FLOWER ROUTES
//=======================================================================================================================================================================

//get all flowers
app.get('/api/flowers/', function(req, res) {
  flower.all(function(result) {
    res.json(result);
  });
});

//create new venue
app.post(`/api/flowers`, function(req, res){
  db.flowers.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      cost: req.body.cost
    }).then(function(result) {
      console.log("done");
        // return(result);
      });;;
});

//=======================================================================================================================================================================
//BRIDAL SHOP ROUTES
//=======================================================================================================================================================================

app.get('/api/bridalshops/', function(req, res) {
  bridalShop.all(function(result) {
    res.json(result);
  });
});

app.post(`/api/bridalshops`, function(req, res){
  db.bridal_shop.create({
      name: req.body.name,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      cost: req.body.cost
    }).then(function(result) {
      console.log("done");
        // return(result);
      });;;
});


//=======================================================================================================================================================================
//MUSIC ROUTES
//=======================================================================================================================================================================

app.get('/api/musics/', function(req, res) {
  music.all(function(result) {
    res.json(result);
  });
});


app.post(`/api/musics`, function(req, res){
    db.musics.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      cost: req.body.cost
    }).then(function(result) {
      console.log("done");
        // return(result);
      });;;
});

//=======================================================================================================================================================================
};
