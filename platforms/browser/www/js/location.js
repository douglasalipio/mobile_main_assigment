

function getLocation() {
    navigator.geolocation.getCurrentPosition(geoCallback, onLocationError);
}

function onLocationError(msg) {
    console.log(msg);
}

function geoCallback(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log("latitude "+ lat);
    console.log("longitude "+ lon);
    // Formatting the data to put it on the front end
    var location = "Lat: " + lat + "<br>Long: " + lon;
    openCage();
}


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

        // Printing the result JSON to the console
        console.log(responseJSON);

        // Extracting the individual values, just as we
        // do with any JSON object. Just as we did 
        // with the position.
        // REMEMBER: In this case, we have an array inside 
        // the JSON object.
        var city = responseJSON.results[0].components.city;
        var country = responseJSON.results[0].components.country;
        var currency = responseJSON.results[0].annotations.currency.name;
        var flag = responseJSON.results[0].annotations.flag;
        moneyiso = responseJSON.results[0].annotations.currency.iso_code;
        
        //console.log("money"+moneyiso);
        // Formattng data to put it on the front end
        var oc = "City: " + city + "<br>Country: " + country + "<br>Currency: " + currency + "<br>Flag:" + flag;
        // var moneyiso = responseJSON.results[0].annotations.currency.iso_code;
        // var moneyiso = responseJSON.results[0].annotations.currency.iso_code;
        //console.log("opa - "+ moneyiso)
        // Placing formatted data on the front ed
        document.getElementById('openCage').innerHTML = oc;
        console.log("teste do lat"+lat);
        console.log("longitude e "+lon);
        getRate();
    }

}
