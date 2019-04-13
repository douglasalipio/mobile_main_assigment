
var fToCel;

function getWeather() {

    var http = new XMLHttpRequest();
    //const url = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=043f638d6a190b88cc6cf7812ba727ee';
    const url = 'https://api.darksky.net/forecast/e5f553b2c2d739a95b1d2783040893c1/37.8267,-122.4233';
    //const url = 'https://api.darksky.net/forecast/e5f553b2c2d739a95b1d2783040893c1/'+lat+,lon;
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
        //console.log(responseJSON.currently.temperature);
        
        //fahrenheitToCelsius(responseJSON.currently.temperature);
        // var tempcelsius = fahrenheitToCelsius(responseJSON.currently.temperature).toFixed(2);
        var summary = responseJSON.currently.summary;
        console.log("Summary - "+summary);
        // var cloud = responseJSON.currently.cloudCover * 100;
        // console.log("Percentual of cloud:" + cloud);
        // //var percenthumidit = responseJson.currently.humidity;
        // //console.log(percenthumidit);
        // var oc2 = "Temperature: " + tempcelsius + " °C" + "<br>wind velocity: " + wind + " Km/h" + "<br>Cloud: " + cloud + "%";

        // // Placing formatted data on the front ed
        // document.getElementById('getWeather').innerHTML = oc2;
    }
}