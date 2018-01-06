//Require models from models direcrtory

module.exports = function(app){


//get routes
  app.get(`/api/:foo?`, function(req, res){
    //code goes here
  });

//post route
  app.post(`/api/new`, function(req, res){
    //code here

  });

  //update
  app.put(`/api/:foo`, function(req, res){
    //code here
  });

}
