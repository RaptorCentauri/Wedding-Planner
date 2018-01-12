const account = require('../models/accounts.js');
const bridalShop = require('../models/bridalShops.js');
const flower = require('../models/flowers.js');
const music = require('../models/music.js');
const venue = require('../models/venues.js');
const chosenVenue = require('../models/chosenVenues.js');
const chosenMusic = require('../models/chosenMusic.js');
const chosenFlower = require('../models/chosenFlowers.js');
const chosenBridalShop = require('../models/chosenBridalShop.js');


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

//tie a venue to a user
app.post(`/api/chosenVenues/`, function(req, res){
  chosenVenue.add(req.body.accountID, req.body.venueID, function(result) {
    console.log(result);
  })
})

//get all of the users chosen venues
app.get('/api/chosenVenues/', function(req, res) {
  if(req.session.username){
    chosenVenue.all(req.query.accountID, (function(result) {
      res.json(result);
    }));
  }
  else {
    console.log(`There is no one logged in right now`);
  }
});

//create a new venue
// app.post(`/api/venues`, function(req, res){
//     db.venue.create({
//       name: req.body.name,
//       address: req.body.address,
//       location: req.body.location,
//       capacity: req.body.capacity,
//       phone: req.body.phone,
//       cost: req.body.cost
//     }).then(function(result) {
//       console.log("venue added");
//       });;
// });

//=======================================================================================================================================================================
//FLOWER ROUTES
//=======================================================================================================================================================================

//get all flowers
app.get('/api/flowers/', function(req, res) {
  flower.all(function(result) {
    res.json(result);
  });
});

//tie a flower to a user
app.post(`/api/chosenFlowers/`, function(req, res){
  chosenFlower.add(req.body.accountID, req.body.flowerID, function(result) {
    console.log(result);
  })
})

//get all of the users chosen flowers
app.get('/api/chosenFlowers/', function(req, res) {
  if(req.session.username){
    chosenFlower.all(req.query.accountID, (function(result) {
      res.json(result);
    }));
  }
  else {
    console.log(`There is no one logged in right now`);
  }
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


//tie a bridalShop to a user
app.post(`/api/chosenBridalShops/`, function(req, res){ap
  chosenBridalShop.add(req.body.accountID, req.body.flowerID, function(result) {
    console.log(result);
  })
})

//get all of the users chosen bridalShops
app.get('/api/chosenBridalShops/', function(req, res) {
  if(req.session.username){
    chosenBridalShop.all(req.query.accountID, (function(result) {
      res.json(result);
    }));
  }
  else {
    console.log(`There is no one logged in right now`);
  }
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

app.get('/api/music/', function(req, res) {
  music.all(function(result) {
    res.json(result);
  });
});

//tie a flower to a user
app.post(`/api/chosenMusic/`, function(req, res){
  chosenMusic.add(req.body.accountID, req.body.flowerID, function(result) {
    console.log(result);
  })
})

//get all of the users chosen flowers
app.get('/api/chosenMusic/', function(req, res) {
  if(req.session.username){
    chosenMusic.all(req.query.accountID, (function(result) {
      res.json(result);
    }));
  }
  else {
    console.log(`There is no one logged in right now`);
  }
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

//=======================================================================================================================================================================
};
