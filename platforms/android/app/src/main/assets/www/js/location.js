
var lat;
var lon;
const LOCATION_CITY_KEY = "extra_location_city_key";
const LOCATION_COUNTRY_KEY = "extra_location_country_key";

function getLocation() {
    navigator.geolocation.getCurrentPosition(geoCallback, onLocationError);
}

function onLocationError(msg) {
    console.log(msg);
}

function geoCallback(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    openCage();
}

var city = "";
var country = "";

function openCage() {

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Latituted and longitude for the API 
    // to process
     const url = 'https://api.opencagedata.com/geocode/v1/json?q='+lat+'+'+lon+'&key=e7743e208ecf4f0a861f7733d9df9b36';
    //console.log("minha url e"+url);
    // Opening the request. Remember, we will send
    // a "GET" request to the URL define above
    http.open("GET", url);
    // Sending the request
    http.send();

    // Once the request has been processed and we have
    // and answer, we can do something with it
    http.onreadystatechange = (e) => {

        // First, I'm extracting the reponse from the 
        // http object in text format
        var response = http.responseText;

        // As we know that answer is a JSON object,
        // we can parse it and handle it as such
        var responseJSON = JSON.parse(response);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        city = responseJSON.results[0].components.city;
        country = responseJSON.results[0].components.country;
        var currency = responseJSON.results[0].annotations.currency.name;
        var flag = responseJSON.results[0].annotations.flag;
        var moneyIso = responseJSON.results[0].annotations.currency.iso_code;
        
        //console.log("money"+moneyiso);
        // Formattng data to put it on the front end
        var oc = "&nbspCity: " + city + "<br>&nbspCountry: " + country + "<br>&nbspCurrency: " + currency + "<br>&nbspFlag:" + flag;
        document.getElementById('openCage').innerHTML = oc;
        getWeather(lat,lon);
        getRate(moneyIso)
        storeLocation(city,country);
    }
}

function saveLocateLocalSystem(city, country){
    localStorage.setItem(LOCATION_CITY_KEY,city); 
    localStorage.setItem(LOCATION_COUNTRY_KEY,country); 
}

function getLocateLocalSystem(key){
    return localStorage.getItem(key)
}

function onSaveLocation() {
    alert('Location saved successfully');
    storeLocation(city,country);
}