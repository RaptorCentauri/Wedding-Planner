  // Declare an object of Dummy Data to test the JQuery With

// var venues = {
//   name: "The Hideaway",
//   address: "555 Address Lane",
//   phone: "(555)555-5555",
//   cap: "300"
// };

$(document).ready(function(){
  // this is the venue button
  $("#venue-id").on("click", function(event){
    $(".infoRow").empty();
        event.preventDefault();

      $.get( "/api/venues", function(data){
        console.log("DATA: ", data);
        console.log("this is a get request");
        for(var i = 0; i < data.length; i ++){
          var venName = data[i].name;
          var venAdd = data[i].address;
          var venLoc = data[i].location;
          var venCap = data[i].capacity;
          var venPhone = data[i].phone;
          var venCost = data[i].cost;
          console.log(venName);

          $(".infoRow").append(
            `<div class="col s6 m6 l4">
            <div class="card alice-blue">
              <div class="card-content grey-text text-darken-3">
                <p class="title venue-name">${venName}</span>
                <p class="title venue-address">${venAdd}</p>
                <p class="title venue-phone">${venPhone}</p>
                <p class="title venue-cap">${venCap}</p>
              </div>
              <div class="card-action">
                <button class="addVenuePlanner" data-id="${i}">Add to Planner</button>
                <a class="addVenuePlanner" data-id="${i}" href="#">Add to Planner</a>
              </div>
            </div>
          </div>`
          );

        } 
    }, "json");

  })

  // this is the flowers button
  $("#flowers-id").on("click", function(event){
    $(".infoRow").empty();
        event.preventDefault();

      $.get( "/api/flowers", function(data){
      console.log("DATA: ", data);
      console.log("this is a get request");
      for(var i = 0; i < data.length; i ++){
          var floName = data[i].name;
          var floPhone = data[i].phone;
          var floEmail = data[i].email;
          var floCost = data[i].cost;
          // console.log(floName);

        $(".infoRow").append(
          `<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title flowers-name">${floName}</span>
              <p class="title flowers-phone">${floPhone}</p>
              <p class="title flowers-email">${floEmail}</p>
              <p class="title flowers-cost">${floCost}</p>
            </div>
            <div class="card-action">
              <button class="addFlowersPlanner" data-id="${i}">Add to Planner</button>
              <a class="addFlowersPlanner" data-id="${i}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`
        );

        }
      }, "json");
  })


// this is the music button
$("#music-id").on("click", function(event){
   $(".infoRow").empty();
       event.preventDefault();

    $.get( "/api/music", function(data){
      console.log("DATA: ", data);
      console.log("this is a get request");
      for(var i = 0; i < data.length; i ++){
          var musName = data[i].name;
          var musPhone = data[i].phone;
          var musEmail = data[i].email;
          var musCost = data[i].cost;
          // console.log(musName);

        $(".infoRow").append(
          `<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title music-name">${musName}</span>
              <p class="title music-phone">${musPhone}</p>
              <p class="title music-email">${musEmail}</p>
              <p class="title music-cost">${musCost}</p>
            </div>
            <div class="card-action">
              <button class="addMusicPlanner" data-id="${i}">Add to Planner</button>
              <a class="addMusicPlanner" data-id="${i}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`
        );

        }
      }, "json");
  })

// this is the bridal button
$("#bridal-id").on("click", function(event) {
  $(".infoRow").empty();
      event.preventDefault();

      $.get("/api/bridalshops", function(data){
        console.log("DATA: ", data);
        console.log("this is a get request");
        for(var i = 0; i < data.length; i ++) {
          var briName = data[i].name;
          var briAdd = data[i].address;
          var briPhone = data[i].phone;
          var briEmail = data[i].email;
          var briCost = data[i].cost;
          // console.log(briName);

          $(".infoRow").append(
             `<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title bridal-name">${briName}</span>
              <p class="title bridal-address">${briAdd}</p>
              <p class="title bridal-phone">${briPhone}</p>
              <p class="title bridal-email">${briEmail}</p>
              <p class="title bridal-cost">${briCost}</p>
            </div>
            <div class="card-action">
              <button class="addBridalPlanner" data-id="${i}">Add to Planner</button>
              <a class="addBridalPlanner" data-id="${i}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`
            );
        }
      }, "json");
      })
});


$(document.body).on("click", ".addVenuePlanner", function(){
  console.log("click working");

  // let blah = this.data("data-id");
  $(".venuePlanner").html("test append");

  console.log(this);
  // console.log(blah);

})


 $('.collapsible').collapsible();
 $(".button-collapse").sideNav();


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
