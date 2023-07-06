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

const menuData = {
    menu: [
      { name: "Google", link: "http://google.com", socialNetwork:false },
      { name: "Facebook", link: "http://facebook.com", socialNetwork:true },
      { name: "Instagram", link: "http://nstagram.com", socialNetwork:true },
      { name: "Twitter", link: "http://twitter.com", socialNetwork:true },
    ]
  };
  
  const menuSource = $('#menu-template').html();
  const menuTemplate = Handlebars.compile(menuSource);
  const menuNewHTML = menuTemplate(menuData);
  
  // append our new html to the page
  $('.menu').append(menuNewHTML);


const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]

const renderAnimals = function(){
    const source = $('#animals-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(animals);
    $('#animals').append(newHTML);  
  }
  
  const renderLanguages = function(){
    const source = $('#languages-template').html();
    const template = Handlebars.compile(source);
    let newHTML = template(languages);
    $('#languages').append(newHTML);  
  }

  renderAnimals()
  renderLanguages()