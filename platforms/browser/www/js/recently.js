

var db = null;

function createDatabase() {
    db = (window.cordova.platformId === 'browser') ?
        window.openDatabase('iwheather', '1.0', 'Data', 2 * 1024 * 1024) :
        window.sqlitePlugin.openDatabase({ name: 'iweather.db', location: 'default' });
    createDatabaseScheme();
}

function createDatabaseScheme() {
    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS Location (city varchar(255), country varchar(255));');
    }, function (error) {
        console.log('Transaction ERROR: ' + error.message);
    }, function () {
        console.log('Populated database OK');
    });
}

function storeLocation(city, country){
    db.transaction(function (tx) {
        var query = "INSERT INTO Location (city, country) VALUES (?,?)";
        tx.executeSql(query, [city, country], function(tx, res) {
            console.log("insertId: " + res.insertId + " -- probably 1");
            console.log("rowsAffected: " + res.rowsAffected + " -- should be 1");
        },
        function(tx, error) {
            console.log('INSERT error: ' + error.message);
        });
    }, function(error) {
        console.log('transaction error: ' + error.message);
    }, function() {
        console.log('transaction ok');
    });
}

function loadStoreLocation(){
    console.log("hello location");
    db.transaction(function (tx) {
        var query = "SELECT * FROM Location";
        tx.executeSql(query, [], function (tx, resultSet) {
            for(var x = 0; x < resultSet.rows.length; x++) {
                //console.log("City: esse" + resultSet.rows.item(x).city +", Country: esse" + resultSet.rows.item(x).country);
                var oc = "&nbspCity: " + resultSet.rows.item(x).city + "<br>&nbspCountry: " + resultSet.rows.item(x).country;
                document.getElementById('loadStoreLocation').innerHTML = oc;
            }
        },
        function (tx, error) {
            console.log('SELECT error: ' + error.message);
        });
    }, function (error) {
        console.log('transaction error: ' + error.message);
    }, function () {
        console.log('transaction ok');
    });
}
