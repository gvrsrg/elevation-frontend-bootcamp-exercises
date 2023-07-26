const urllib = require('urllib')

let rootDiv = $("#root")

rootDiv.on("click", function () {
    rootDiv.css("background-color","#f39c12");

})





urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})