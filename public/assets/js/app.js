
// function getUserVenues() {
//   $.get(`/api/chosenVenues`)
//     .done(function(data) {
//         $(".venuePlanner").empty();
//         $(".venuePlanner").append(`<ul>`);
//       for (i = 0; i < data.length; i++) {
//         $(".venuePlanner").append(`<li>${data[i].name}</li>`);
//       }
//       $(".venuePlanner").append(`</ul>`);

//       console.log(data.name);
//     })
// }

// function getUserFlowers() {
//   $.get(`/api/chosenFlowers`)
//     .done(function(data) {
//       $(".flowerPlanner").empty();
//       $(".flowerPlanner").append(`<ul>`);
//     for (i = 0; i < data.length; i++) {
//       $(".flowerPlanner").append(`<li>${data[i].name}</li>`);
//     }
//     $(".flowerPlanner").append(`</ul>`);
//       console.log(data);
//     })
// }

// function getUserBridalShops() {
//   $.get(`/api/chosenBridalShops`)
//     .done(function(data) {
//       $(".bridalPlanner").empty();
//       $(".bridalPlanner").append(`<ul>`);
//     for (i = 0; i < data.length; i++) {
//       $(".bridalPlanner").append(`<li>${data[i].name}</li>`);
//     }
//     $(".bridalPlanner").append(`</ul>`);
//       console.log(data);
//     })
// }

// function getUserMusic() {
//   $.get(`/api/chosenMusic`)
//     .done(function(data) {
//       $(".musicPlanner").empty();
//       $(".musicPlanner").append(`<ul>`);
//     for (i = 0; i < data.length; i++) {
//       $(".musicPlanner").append(`<li>${data[i].name}</li>`);
//     }
//     $(".musicPlanner").append(`</ul>`);
//       console.log(data);
//     })
// }


$(document).ready(function(){

  // this is the venue button on click of the venue button, 
  $(".venue-class").on("click", function(event){
    // empty the results row
    $(".resultsRow").empty();
        event.preventDefault();
      // this is an ajax request that will retrive data from the routes that point to the venues db sql => model => orm => connection
      $.get( "/api/venues", function(data){
        // this is a for loop that will thke this data and store it in variables to be put into the DOM with JQuery
        for(var i = 0; i < data.length; i ++){
          var venName = data[i].name;
          var venAdd = data[i].address;
          var venPhone = data[i].phone;
          var venSite = data[i].website;
          // console.log(venName);
          // console.log(i);
          
          addtoPlanner(venName);
          $(".resultsRow").append(`<div class="col s6 m6 l4">
              <div class="card alice-blue">
                <div class="card-content grey-text text-darken-3">
                  <p class="title venue-name">${venName}</span>
                    <p class="title venue-address">${venAdd}</p>
                    <p class="title venue-phone">${venPhone}</p>
                    <p class="title venue-site">${venSite}</p>
                </div>
                <div class="card-action">
                  <a class="addVenuePlanner" data-id="${i}" text="${venName}" href="#">Add to Planner</a>
                  
                </div>
              </div>
            </div>`);
  
        }
     
      }, "json");


  });

  // this is the flowers button
  $(".flowers-class").on("click", function(event){
    $(".resultsRow").empty();
        event.preventDefault();

      $.get( "/api/flowers", function(data){
      console.log("DATA: ", data);
      console.log("this is a get request");
      for(var i = 0; i < data.length; i ++){
          var floName = data[i].name;
          var floPhone = data[i].phone;
          var floEmail = data[i].email;
          var floSite = data[i].website;
          // console.log(floName);
        addtoPlanner(floName);
        $(".resultsRow").append(`<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title flowers-name">${floName}</span>
              <p class="title flowers-phone">${floPhone}</p>
              <p class="title flowers-email">${floEmail}</p>
              <p class="title flowers-site">${floSite}</p>
            </div>
            <div class="card-action">

              <a class="addFlowerPlanner" data-id="${i}" text="${floName}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`);

        }
      }, "json");
  })


// this is the music button
$(".music-class").on("click", function(event){
   $(".resultsRow").empty();
       event.preventDefault();

    $.get( "/api/musics", function(data){
      console.log("DATA: ", data);
      console.log("this is a get request");
      for(var i = 0; i < data.length; i ++){
          var musName = data[i].name;
          var musPhone = data[i].phone;
          var musEmail = data[i].email;
          var musSite = data[i].website;
          // console.log(musName);
        addtoPlanner(musName);
        $(".resultsRow").append(`<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title music-name">${musName}</span>
              <p class="title music-phone">${musPhone}</p>
              <p class="title music-email">${musEmail}</p>
              <p class="title music-cost">${musSite}</p>
            </div>
            <div class="card-action">

              <a class="addMusicPlanner" data-id="${i}" text="${musName}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`);

        }
      }, "json");
  })

// this is the bridal button
$(".bridal-class").on("click", function(event) {
  $(".resultsRow").empty();
      event.preventDefault();

      $.get("/api/bridalshops", function(data){
        console.log("DATA: ", data);
        console.log("this is a get request");
        for(var i = 0; i < data.length; i ++) {
          var briName = data[i].name;
          var briAdd = data[i].address;
          var briPhone = data[i].phone;
          var briEmail = data[i].email;
          var briSite = data[i].website;
          addtoPlanner(briName);
          $(".resultsRow").append(`<div class="col s6 m6 l4">
              <div class="card alice-blue">
                <div class="card-content grey-text text-darken-3">
                  <p class="title bridal-name">${briName}</span>
                    <p class="title bridal-address">${briAdd}</p>
                    <p class="title bridal-phone">${briPhone}</p>
                    <p class="title bridal-email">${briEmail}</p>
                    <p class="title bridal-cost">${briSite}</p>
                </div>
                <div class="card-action">

                  <a class="addBridalPlanner" data-id="${i}" text="${briName}" href="#">Add to Planner</a>
                </div>
              </div>
            </div>`);
        }
      }, "json");
      })
});

// $(document.body).on("click", ".addBridalPlanner", function () {
//   console.log("click working");

//   console.log('This is in this: ', this, ' so this is working ');
//   // now how do we add the venue with the data-id="1" to the planner with jquery?
//   $(".bridalPlanner").append(this);
// })

function addtoPlanner(vendorName){

  $(".addVenuePlanner",).on("click", function (data){
    traversedVar = data.currentTarget.attributes.text.textContent;
    console.log(this);
    $(".venuePlanner").append("<ul>");
    $(".venuePlanner").append("<li>" + traversedVar + "</li>");
  })

  $(".addFlowerPlanner", ).on("click", function (data) {
    traversedVar = data.currentTarget.attributes.text.textContent;
    console.log(this);
    $(".flowerPlanner").append("<ul>");
    $(".flowerPlanner").append("<li>" + traversedVar + "</li>");
  })

  $(".addMusicPlanner", ).on("click", function (data) {
    traversedVar = data.currentTarget.attributes.text.textContent;
    console.log(this);
    $(".musicPlanner").append("<ul>");
    $(".musicPlanner").append("<li>" + traversedVar + "</li>");
  })

  $(".addBridalPlanner", ).on("click", function (data) {
    traversedVar = data.currentTarget.attributes.text.textContent;
    console.log(this);
    $(".bridalPlanner").append("<ul>");
    $(".bridalPlanner").append("<li>" + traversedVar + "</li>");

  })

}

    //   $(".bridalPlanner").append(`<ul>`);
    // for (i = 0; i < data.length; i++) {
    //   $(".bridalPlanner").append(`<li>${data[i].name}</li>`);
    // }
    // $(".bridalPlanner").append(`</ul>`);
    //   console.log(data);
    // })


$('.collapsible').collapsible();
$(".button-collapse").sideNav();

