const source = $('#store-template').html();

const template = Handlebars.compile(source)


var items = [
    { item: "cheese", price: 15 },
    { item: "arak", price: 68 },
    { item: "hummus", price: 15 },
    { item: "pita", price: 5 }
  ]
  
for (let item of items){

    $('.items').append(template(item));    
}

var classData = {
    classmates: [
        {name: "That on gal", description: "Always has the ansswer"},
        {name: "The weird dude", description: "Quick with a smile"},
        {name: "Taylor", description: "Just Taylor"}
    ]
}
var classSource = $('#class-template').html();

var classTemplate = Handlebars.compile(classSource)

var newHTML = classTemplate(classData);

$('.class').append(newHTML);