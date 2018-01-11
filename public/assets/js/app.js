// Declare an object of Dummy Data to test the JQuery With

var venues = {
  name: "The Hideaway",
  address: "555 Address Lane",
  phone: "(555)555-5555",
  cap: "300"
};
var venObject;

// this function takes the data object and prints the add to planner button to every option in the object

// function to populate options:


$(document).ready(function(){
  // this is the venue button
  $("#venue-id").on("click", function(event){
    $("#venues").empty();
        event.preventDefault();

      $.get( "/api/venues", function(data){
      // console.log("DATA: ", data);
      // console.log("this is a get request");
      var venResults = data;
      // for every result in the data object do this
      for(var i = 0; i < venResults.length; i++){
        // for every result in the data object, create a div called venue item to be dynamically added to the page and then assign it to the venue div
        var venueDiv = $("<div class=\"venue-item\">");
        // adds the card title html dynam. to page
        var cardTitle = $(`<div class="col s6 m4">
                            <div class="card alice-blue">
                              <div class="card-content grey-text text-darken-3">`);
        //append card title to the the venDiv var
        venDiv.append(cardTitle)
        //adds the results of each venues name to a var called venName
        var venName = venResults[i].name;
        // makes a par to display that var
        var p = $("<p class=\"card-title\">").text("Name: " + venName);
        // appends the par var to the venDiv var
        venueDiv.append(p);
        // appends everything to the venues id
        $("#venues").append(venueDiv);
        // Dave's changes commented out
        // $(".infoRow").append(
        //           `<div class="col s6 m4">
        //           <div class="card alice-blue">
        //             <div class="card-content grey-text text-darken-3">
        //               <span class="card-title venue-name">${venObject.venName}</span>
        //               <p class="title venue-address">${venObject.venAdd}</p>
        //               <p class="title venue-phone">${venObject.venPhone}</p>
        //               <p class="title venue-cap">${venObject.venCap}</p>
        //             </div>
        //             <div class="card-action">
        //               <button class="addVenuePlanner" data-id="${i}">Add to Planner</button>
        //               <a href="#">Add to Planner</a>
        //             </div>
        //           </div>
        //         </div>`
        // );
        // $(".addVenuePlanner").on("click", function(){
        //    $(".venuePlanner").attr( "data-id", venObject.venAdd[i]);

        // });


    }
    }, "json");

    })
});



// $(document.body).on("click", ".addVenuePlanner", function(){
//   console.log("click working");

//   // let blah = this.data("data-id");
//   $(".venuePlanner").html("test append");

//   console.log(this);
//   // console.log(blah);

// })


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

        // venObject = {
        //   venName: venResults[i].name,
        //   venAdd: venResults[i].address,
        //   venLoc: venResults[i].location,
        //   venCap: venResults[i].capacity,
        //   venPhone: venResults[i].phone,
        //   venCost: venResults[i].cost
        // }