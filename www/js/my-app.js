
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

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log("Device is ready!");
    getLocation();
    createDatabase();
    storeLocation();
    loadStoreLocation("Dublin", "Ireland");
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

