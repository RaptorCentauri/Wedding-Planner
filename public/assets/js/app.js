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
          $(".resultsRow").append(`<div class="col s6 m6 l4">
              <div class="card alice-blue">
                <div class="card-content grey-text text-darken-3">
                  <p class="title venue-name">${venName}</span>
                    <p class="title venue-address">${venAdd}</p>
                    <p class="title venue-phone">${venPhone}</p>
                    <p class="title venue-site">${venSite}</p>
                </div>
                <div class="card-action">
                  <a class="addVenuePlanner" data-id="${i}" text="${venName}" address="${venAdd}" phone="${venPhone}" web="${venSite}">Add to Planner</a>
                </div>
              </div>
            </div>`);
  
        }
        addtoPlanner();
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
        $(".resultsRow").append(`<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title flowers-name">${floName}</span>
              <p class="title flowers-phone">${floPhone}</p>
              <p class="title flowers-email">${floEmail}</p>
              <p class="title flowers-site">${floSite}</p>
            </div>
            <div class="card-action">

              <a class="addFlowerPlanner" data-id="${i}" text="${floName}" address="${floEmail}" phone="${floPhone}" web="${floSite}" href="#">Add to Planner</a>

            </div>
          </div>
        </div>`);
        }
        addtoPlanner();
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

        $(".resultsRow").append(`<div class="col s6 m6 l4">
          <div class="card alice-blue">
            <div class="card-content grey-text text-darken-3">
              <p class="title music-name">${musName}</span>
              <p class="title music-phone">${musPhone}</p>
              <p class="title music-email">${musEmail}</p>
              <p class="title music-cost">${musSite}</p>
            </div>
            <div class="card-action">
              <a class="addMusicPlanner" data-id="${i}" text="${musName}" address="${musEmail}" phone="${musPhone}" web="${musSite}" href="#">Add to Planner</a>
            </div>
          </div>
        </div>`);
        }
        addtoPlanner();
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
                  <a class="addBridalPlanner" data-id="${i}" text="${briName}" address="${briAdd}" phone="${briPhone}" web="${briSite}" href="#">Add to Planner</a>
                </div>
              </div>
            </div>`);
        } 
        addtoPlanner();
      }, "json");
      })
});

function addtoPlanner(){

  $(".addVenuePlanner").on("click", function (data){
    console.log("in the data ob: ", data);
    dataName = data.currentTarget.attributes.text.textContent;
    dataAdd = data.currentTarget.attributes.address.textContent;
    dataPhone = data.currentTarget.attributes.phone.textContent;
    dataWeb = data.currentTarget.attributes.web.textContent;
    $(".venuePlanner").append("<ul>");
    $(".venuePlanner").append("<li>" + dataName + ",  " + dataAdd + ",  " + dataPhone +  "." + "</li>");
    $(".venuePlanner").append("<li>"+ dataWeb + "</li>" + "<br>")
  })

  $(".addFlowerPlanner").on("click", function (data) {
    dataName = data.currentTarget.attributes.text.textContent;
    dataAdd = data.currentTarget.attributes.address.textContent;
    dataPhone = data.currentTarget.attributes.phone.textContent;
    dataWeb = data.currentTarget.attributes.web.textContent;
    $(".flowerPlanner").append("<ul>");
    $(".flowerPlanner").append("<li>" + dataName + ",  " + dataAdd + ",  " + dataPhone + "." + "</li>");
    $(".flowerPlanner").append("<li>" + dataWeb + "</li>" + "<br>")
  })

  $(".addMusicPlanner", ).on("click", function (data) {
    dataName = data.currentTarget.attributes.text.textContent;
    dataAdd = data.currentTarget.attributes.address.textContent;
    dataPhone = data.currentTarget.attributes.phone.textContent;
    dataWeb = data.currentTarget.attributes.web.textContent;
    $(".musicPlanner").append("<ul>");
    $(".musicPlanner").append("<li>" + dataName + ",  " + dataAdd + ",  " + dataPhone + "." + "</li>");
    $(".musicPlanner").append("<li>" + dataWeb + "</li>" + "<br>")
  })

  $(".addBridalPlanner", ).on("click", function (data) {
    dataName = data.currentTarget.attributes.text.textContent;
    dataAdd = data.currentTarget.attributes.address.textContent;
    dataPhone = data.currentTarget.attributes.phone.textContent;
    dataWeb = data.currentTarget.attributes.web.textContent;
    $(".bridalPlanner").append("<ul>");
    $(".bridalPlanner").append("<li>" + dataName + ",  " + dataAdd + ",  " + dataPhone + "." + "</li>");
    $(".bridalPlanner").append("<li>" + dataWeb + "</li>" + "<br>")
  })
}


$('.collapsible').collapsible();
$(".button-collapse").sideNav();

