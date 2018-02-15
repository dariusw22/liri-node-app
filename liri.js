require("dotenv").config();

// code to read keys.js files 
var fs = require('fs');

fs.readFile('keys.js', 'utf8', function(err, data) {

    // if block to check for error 
    if (err) {
        return console.log(error);
    }

    // log the data
    console.log(data);

    // split the data with a comma
    var dataArr = data.split(",");

    // display the content inside of the array
    console.log(dataArr);

});

// code required to import from keys.js
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

