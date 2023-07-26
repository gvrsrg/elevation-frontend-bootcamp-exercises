const moment = require('moment')
const urllib = require('urllib')

let timeNow = new Date()
console.log(timeNow)

let formattedTimeNow = moment().format("MMMM Do, YYYY")
console.log(formattedTimeNow) //January 3rd, 2017

const OMDB_KEY = "7e1fb5c1"

console.log("response: ")
urllib.request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){

    console.log(response.toString())


})
console.log("end of response")



const MOVIE_TITLE = "The Lion King"

console.log(`MOVIE response: http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_KEY}&t=${MOVIE_TITLE}`)
urllib.request(`http://www.omdbapi.com/?i=tt3896198&apikey=${OMDB_KEY}&t=${MOVIE_TITLE}`, function(err, response){

    console.log(response.toString())


})
console.log("end of MOVIE response")
