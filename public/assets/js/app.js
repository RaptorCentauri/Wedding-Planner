
$(document).ready(function(){

  // this is the venue button
  $("#venue-id").on("click", function(event){
        event.preventDefault();
  // input venue data here
    console.log("this venue button works")
        // venues = {
        //   name: $(this).data("name")
        // }
         $(".venue-results").append("<p>this is a venue name</p>");

      $.get( "/api/venues", function(data){
      location.reload();
      console.log("this is get a request");
      $(".venue-results").append("<p>this is a venue name</p>")
    }, "json");

    })

});



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