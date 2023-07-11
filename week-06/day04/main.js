const fetch1 = function (isbn) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
      success: function (data) {
          console.log(data)
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

const fetch2 = function (queryType , queryValue) {
  $.ajax({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
      success: function (data) {

        //console.log(apartments) //array of apartments to render
        //Your code goes here.
    
        const source = $("#book-template").html();
        const template = Handlebars.compile(source);
        let newHTML = template({data});
        $("#books").append(newHTML);
    
      },
      error: function (xhr, text, error) {
          console.log(text)
      }
  })
}

$("#books").empty()
fetch1(9782806269171) // - The Little Prince: Book Analysis
fetch1(1440633908) // - Of Mice and Men by John Steinbeck
fetch1(9781945048470) // - The Alchemist by Paulo Coelho
fetch1(9780307417138) // - Hitchhiker’s Guide to the Galaxy


fetch2("isbn", 9789814561778) //- From Third World to First: The Singapore Story
fetch2("title", "How to Win Friends and Influence People") // - book by Dale Carnegie

let data = $.get('https://www.googleapis.com/books/v1/volumes?q=isbn:9782806269171', function(result){
  return result
})
console.log(data)