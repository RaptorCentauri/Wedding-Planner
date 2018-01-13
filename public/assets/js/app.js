
function isLoggedIn(log, groom, bride) {
  if(log){
    $(".coupleName").html(` back ${groom} & ${bride}!`);
    getUserVenues();
    getUserFlowers();
    getUserBridalShops();
    getUserMusic();
    return true;
  }
  else {
    return false;
  }
}

function getUserVenues() {
  let account = {
    accountID: sessionStorage.getItem('coupleID')
  }
  $.get(`/api/chosenVenues`, account)
    .done(function(data) {
        $(".venuePlanner").empty();
        $(".venuePlanner").append(`<ul>`);
      for (i = 0; i < data.length; i++) {
        $(".venuePlanner").append(`<li>${data[i].name}</li>`);
      }
      $(".venuePlanner").append(`</ul>`);

      console.log(data.name);
    })
}

function getUserFlowers() {
  let account = {
    accountID: sessionStorage.getItem('coupleID')
  }
  $.get(`/api/chosenFlowers`, account)
    .done(function(data) {
      $(".flowerPlanner").empty();
      $(".flowerPlanner").append(`<ul>`);
    for (i = 0; i < data.length; i++) {
      $(".flowerPlanner").append(`<li>${data[i].name}</li>`);
    }
    $(".flowerPlanner").append(`</ul>`);
      console.log(data);
    })
}

function getUserBridalShops() {
  let account = {
    accountID: sessionStorage.getItem('coupleID')
  }
  $.get(`/api/chosenBridalShops`, account)
    .done(function(data) {
      $(".bridalPlanner").empty();
      $(".bridalPlanner").append(`<ul>`);
    for (i = 0; i < data.length; i++) {
      $(".bridalPlanner").append(`<li>${data[i].name}</li>`);
    }
    $(".bridalPlanner").append(`</ul>`);
      console.log(data);
    })
}

function getUserMusic() {
  let account = {
    accountID: sessionStorage.getItem('coupleID')
  }
  $.get(`/api/chosenMusic`, account)
    .done(function(data) {
      $(".musicPlanner").empty();
      $(".musicPlanner").append(`<ul>`);
    for (i = 0; i < data.length; i++) {
      $(".musicPlanner").append(`<li>${data[i].name}</li>`);
    }
    $(".musicPlanner").append(`</ul>`);
      console.log(data);
    })
}








$(document).ready(function(){

  let loggedIn = sessionStorage.getItem('logged_in');

let couple = {
  coupleID: sessionStorage.getItem('coupleID'),
  groom: sessionStorage.getItem('groom'),
  bride: sessionStorage.getItem('bride'),
}

isLoggedIn(loggedIn, couple.groom, couple.bride);



  $("#login-button").on("click", function(event) {

    event.preventDefault();


    let loginAuth = {
      username: $("#email").val(),
      password: $("#password").val()
    }

    console.log(loginAuth);


    $.post("/login", loginAuth).done(function(data){
      // console.log("NEW LINE");
      // console.log(data);
      couple.groom = data[0].groom;
      couple.bride = data[0].bride;
      couple.coupleID = data[0].id;
      loggedIn = true;
      sessionStorage.setItem('logged_in', loggedIn);
      sessionStorage.setItem('coupleID', couple.coupleID);
      sessionStorage.setItem('groom', couple.groom);
      sessionStorage.setItem('bride', couple.bride);
      isLoggedIn(loggedIn, couple.groom, couple.bride);
    });
  })






  // this is the venue button
  $("#venue-id").on("click", function(event){
    $(".infoRow").empty();
        event.preventDefault();

      $.get( "/api/venues", function(data){

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
                <p class="title venue-cap">${venCap} Person Capacity</p>
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
              <p class="title flowers-cost">$${floCost}</p>
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
              <p class="title music-cost">$${musCost}</p>
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
              <p class="title bridal-cost">$${briCost}</p>
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
