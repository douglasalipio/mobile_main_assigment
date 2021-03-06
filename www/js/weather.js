
var fToCel;

function getWeather(lat, lon) {
    var http = new XMLHttpRequest();
    const url = 'https://api.darksky.net/forecast/e5f553b2c2d739a95b1d2783040893c1/' + lat + ',' + lon + '';
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
        var summary = responseJSON.currently.summary;
        var wind = responseJSON.currently.windSpeed;
        var humidity = responseJSON.currently.humidity;
        var temperature = responseJSON.currently.temperature;
        fToCel = fahrenheitToCelsius(temperature)
        var oc =  `&nbspSummary: ${summary}
        <br>&nbspWind speed: ${wind} Km/h
        <br>&nbspHumidity: ${humidity}%
        <br>&nbspTemperature: ${fToCel}C`;
        document.getElementById('getWeather').innerHTML = oc;
    }
}

function fahrenheitToCelsius(fahrenheit) {
    var fTemp = fahrenheit;
    fToCel = (fTemp - 32) * 5 / 9;
    return Number(fToCel).toFixed(2);
}