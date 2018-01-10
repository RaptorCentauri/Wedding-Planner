//Require models from models directory
// var Venue = require('../models/venue.js');
// var Music = require('../models/music.js');
// var Flowers = require('../models/flowers.js');
// var BridalShop = require('../models/bridalShops.js');
var db = require('../models');

module.exports = function(app) {
//get routes
 //venues

  app.get(`/api/venues/:venues?`, function(req, res){
    if (req.params.venues) {
        db.venue.findOne({
          where: {
            id: req.params.id
          }
        }).then(function(result){
          return res.json(result);
        });
      }
      else {
        db.venue.findAll({})
        .then(function(result) {
          console.log("made a get request to venues");
          console.log(result);
          return res.json(result);
        });
      }
    });

  //bridalshops
  app.get('/api/bridalshops/:bridalshops?', function(req, res) {
    if (req.params.bridalshops) {
      db.bridal_shop.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.bridal_shop.findAll({})
      .then(function(result) {
        return res.json(result);
      });
    }
  });

  //music
  app.get('/api/music/:music?', function(req, res) {
    if (req.params.music) {
      db.music.findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.music.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }
  });

  //flowers
  app.get('/api/flowers/:flowers?', function(req, res) {
    if (req.params.flowers) {
      db.flowers.findOne({
       where: {
          id: req.params.id
       }
      })
      .then(function(result) {
        return res.json(result);
      });
    }
    else {
      db.flowers.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }
  });


//post route
  app.post(`/api/venues`, function(req, res){
    // console.log(`LOOK HERE===============`);
    // console.log(req.body);
    // console.log(`========================`);
      db.venue.create({
        name: req.body.name,
        address: req.body.address,
        location: req.body.location,
        capacity: req.body.capacity,
        phone: req.body.phone,
        cost: req.body.cost
      }).then(function(result) {
        console.log("done");
          // return(result);
        });;
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

  app.post(`/api/music`, function(req, res){
      db.music.create({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        cost: req.body.cost
      }).then(function(result) {
        console.log("done");
          // return(result);
        });;;
  });

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

  //update
  app.put(`/api/:venues`, function(req, res){
      db.Venue.update({
        name: venue.name,
        address: venue.address,
        location: venue.location,
        capacity: venue.capacity,
        phone: venue.phone,
        cost: venue.cost
      }, {
        where: {
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });

  app.put(`/api/:bridalshops`, function(req, res){
      db.BridalShop.update({
        name: bridalshop.name,
        address: bridalshop.address,
        phone: bridalshop.phone,
        email: bridalshop.email,
        cost: bridalshop.cost
      }, {
        where: {
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });

  app.put(`/api/:music`, function(req, res){
      db.Music.update({
        name: music.name,
        phone: music.phone,
        email: music.email,
        cost: music.cost
      }, {
        where: {
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });

  app.put(`/api/:flowers`, function(req, res){
      db.Flower.update({
        name: flower.name,
        phone: flower.phone,
        email: flower.email,
        cost: flower.cost
      }, {
        where:{
        id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });
};
