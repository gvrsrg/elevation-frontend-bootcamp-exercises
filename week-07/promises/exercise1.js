const getRandomWord = function () {
    let url = `https://random-word-api.herokuapp.com/word`
    return new Promise((resolve, reject) =>
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('REquest failed')
        })
        .then(data => resolve(data))
        )
        .catch(error => reject(error));
}


const getBookByTitle = function (word) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    return new Promise((resolve, reject) =>
        fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('REquest failed')
        })
        .then(data => resolve(data))
        )
        .catch(error => reject(error));
}




getRandomWord()
    .then(response =>{
        console.log(response[0])
        getBookByTitle(response[0])
    
        .then(book => {
            if (book.totalItems>0){
                console.log(`"${book.items[0].volumeInfo.title}" by ${book.items[0].volumeInfo.authors}`)
            }
            else {
                console.log("Book not found")
            }

        })
})