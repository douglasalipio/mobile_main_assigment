function getRate(){

    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();

    // The url to send the request to. Notice that we're passing
    // here some value of Latituted and longitude for the API 
    // to process
    //const url = 'http://apilayer.net/api/live?access_key=295fa4ae6b0ad82f2deec9e1a75a6eda&currencies=EUR&source=USD&format=1';
    //const url = 'http://apilayer.net/api/live?access_key=295fa4ae6b0ad82f2deec9e1a75a6eda&currencies=USD&source='+moneyiso+'&format=1';
    //const url = 'http://apilayer.net/api/live?access_key=295fa4ae6b0ad82f2deec9e1a75a6eda&currencies=EUR&source='+moneyiso+'&format=1';
    const url= 'https://free.currencyconverterapi.com/api/v6/convert?q=USD_'+moneyiso+'&compact=ultra&apiKey=ee5368d2967dffe44b5a';
    //const url= 'https://free.currconv.com/api/v7/convert?q=USD_EUR&compact=ultra&callback=sampleCallback&apiKey=d799b0ef83b0eed56145';
    // Opening the request. Remember, we will send
    console.log("dentro do dinhero"+moneyiso);
    console.log("minha url "+url);
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

        rate = responseJSON.USD_EUR;

        var oc3 = "Your Currency money is: "+moneyiso;

        // Placing formatted data on the front ed
        //document.getElementById('getWeather').innerHTML=oc3;
        
    }
}