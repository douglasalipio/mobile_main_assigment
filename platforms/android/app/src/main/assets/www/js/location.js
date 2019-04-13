function getLocation() {
    navigator.geolocation.getCurrentPosition(geoCallback, onLocationError);
}


function onLocationError(msg) {
    console.log(msg);
}

function geoCallback(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log("latitude "+lat);
    console.log("longitude "+long);
    // Formatting the data to put it on the front end
    var location = "Lat: " + lat + "<br>Long: " + lon;
}