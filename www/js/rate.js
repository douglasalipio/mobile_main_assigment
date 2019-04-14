var defaultMoney = "USD"
var layerAPIKey = "ee5368d2967dffe44b5a"
var rate;
function getRate(moneyIso) {
    // The XMLHttpRequest object, is the one in 
    // charge of handleing the request for us
    var http = new XMLHttpRequest();
    const url = 'https://free.currencyconverterapi.com/api/v6/convert?q=' + defaultMoney + '_' + moneyIso + '&compact=ultra&apiKey=' + layerAPIKey + '';
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
        rate = responseJSON[`USD_${moneyIso}`];
        document.getElementById('dynamicMoneyLabel').innerHTML = moneyIso;
    }
}

function covertDynamicMoneyToUsd(){
    var input = document.getElementById('dynamicMoneyValue').value;
    var result = input * rate;
    document.getElementById('defaultMoneyValue').value = Number(result).toFixed(2);
}

function covertUsdToDynamicMoney(){
    console.log("rate value - "+ rate); 
    var input = document.getElementById('defaultMoneyValue').value;
    var result = input * rate;
    console.log("input value - "+ input);
    console.log("result - "+ result);
    document.getElementById('dynamicMoneyValue').value = Number(result).toFixed(2);
}

