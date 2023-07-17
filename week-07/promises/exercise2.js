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

const showBook = (response) => {
    let result = "BOOK NOT FOUND";
    if (response.totalItems === 0) {
      console.log("BOOK NOT FOUND");
    } else {
      let authors = "";
      const authorsArr = response.items[0].volumeInfo.authors || ["-"];
      authorsArr.forEach(
        (name) => (authors = authors + authorsArr.length > 1 ? ", " : " " + name)
      );
  
      result = response.items[0].volumeInfo.title + "." + authors;
    }
    console.log(result);
    $("#book-data")
      .append($("<br>"))
      .append(($("<p>").innerHTML = result));
  };

const getGif = (word) => {
    const apiKey = "AipLyRs9DHlNJaqGmmYtSWKtE87g6WfT";
    let gifSearch = `http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${apiKey}&limit=1`;
    return new Promise((resolve, reject) => {
      $.get(gifSearch).then((responce) => {
        resolve(responce);
        console.log(responce.data[0]);
      });
    });
  };

  const showGif = (responce) => {
    let imgPath = ""
    if (responce.data.length>0){
        const gif = responce.data[0].images;
        imgPath = gif.fixed_height_still.url
    } else {
        imgPath = "https://media.giphy.com/media/g01ZnwAUvutuK8GIQn/giphy.gif"
    }


    const $img = $("<img>");

    
    $img.attr({ src: imgPath });
    $("#book-data").append($img);
  };


const refreshPage = function() {
getRandomWord()
    .then(response =>{
        word = response[0]
        console.log(response[0])
        let bookPromise = getBookByTitle(word)
        let gifPromise = getGif(word)
        return Promise.all([bookPromise, gifPromise])
    })
    .then(promiseResults => {
        let [book, gif] = promiseResults
        showBook(book)
        showGif(gif)
    })
}

$("#get-book").on("click", refreshPage); 