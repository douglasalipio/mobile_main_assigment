
// Initialize app
var myApp = new Framework7({
    
});
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log("Device is ready!");
    getLocation();
    createDatabase();
    loadStoreLocation();   
    getCurrentTime();
});

function gotFS(fileSystem) {
    fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
}
function fail(evt) {
    console.log(evt.target.error.code);
}

function getLocation() {
    // Once the position has been retrieved, an JSON object
    // will be passed into the callback function (in this case geoCallback)
    // If something goes wrong, the onError function is the 
    // one that will be run
    navigator.geolocation.getCurrentPosition(geoCallback, onError);
}

function getCurrentTime(){
    console.log("horario"+ time);
    document.getElementById('getCurrentTime').innerHTML = "time";
}

function initMap(lat, lng) {

    // Defining a position to display
    var cct = {lat:lat, lng: lng};
    
    // Creating the map, centred on the position 
    // defined above
    var myMap = new google.maps.Map(document.getElementById('map'),
        {zoom: 18,
        center: cct });
    
    // Creating a marker to place on the map
    // at the position defined above
    var marker = new google.maps.Marker(
        { position: cct,
        map: myMap });
    
    // Adding another pointer
    var otherLocation = {lat: lat, lng: -lng};
    var marker2 = new google.maps.Marker(
        { position: otherLocation,
        map: myMap });

    // REMEMBER: I added some style to the style file
    // to be able to display the map!!!
         
} 