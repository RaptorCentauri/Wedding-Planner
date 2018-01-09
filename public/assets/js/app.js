// Declare an object of Dummy Data to test the JQuery With

var venues = {
  name: "The Hideaway",
  address: "555 Address Lane",
  phone: "(555)555-5555",
  cap: "300"
};

$(document).ready(function(){
  // this is the venue button
  $("#venue-id").on("click", function(event){
        event.preventDefault();
  // input venue data here
        // venues = {
        //   name: $(this).data("name")
        // }
         $(".venue-name").text(venues.name);
         $(".venue-address").text("Location: " + venues.address);
         $(".venue-phone").text("Phone: " + venues.phone);
         $(".venue-cap").text("Max Capacity: " + venues.cap);

      $.get( "/api/venues", function(data){
      location.reload();
      console.log("this is a get request");
    }, "json");

    })



});


 $('.collapsible').collapsible();


// function recipeReturn(ID) {
//         let queryURL = `https://api.yummly.com/v1/api/recipe/${ID}?${yummlyID}&${yummlyKey}`;
//         $.ajax({
//             url: queryURL,
//             method: "GET"
//         }).done(function(response) {
//             let div = $(`<div class="col-md-6 col-xs-12 recipe-div">`);
//             div.append(`<div class="recipe-name"><a href=${response.attribution.url} target="_blank" title="${response.name}"><h4>${response.name}</h4></a></div>`)
//                 .append(`<a href=${response.attribution.url} target="_blank"><img class="recipe-image" src=${response.images[0].imageUrlsBySize["360"]} /></a>`);
//             $("#recipeHome").append(div);
//         });