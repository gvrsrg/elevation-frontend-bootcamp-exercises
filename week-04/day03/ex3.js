const SongsManager = function() {
    var template = "https://www.youtube.com/watch?v="
    var songs = {}


    const addSong = function(songName, pathToSong){
        songs[songName] = pathToSong.replace(template,"")
    }

    const getSong = function(songName){
        return template + songs[songName]
    }

    

    return {
        addSong: addSong,
        getSong: getSong
    }
}



const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.addSong("roll", "https://www.youtube.com/watch?v=dQw4w9WgXcQ")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ