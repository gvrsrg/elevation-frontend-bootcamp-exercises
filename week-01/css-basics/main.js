console.log("Hello, world!")
//let username = prompt("What is your username?")
//------------------
let boughtTesla = true
const yearOfTeslaPurchase = 2014
let isUSCitizen = false
let currentYear = 2018

if (boughtTesla) {
  if (isUSCitizen) {
    if ((currentYear - yearOfTeslaPurchase) >= 4) {
      console.log("Would you like an upgrade?")
    } else {
      console.log("Are you satisfied with your Tesla?")
    }
  } else {
    console.log("Would you like to move to US?")
  }
} else {
  console.log("Would you like to buy Tesla?")
}

//------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.splice(1, 2)
numbers[3] = 1
numbers.splice(-4, 4)
numbers.unshift(0)
console.log(numbers)

//------------------

let p1 = {
  name: "Jill",
  age: 40,
  city: "Rehovot"
}
let p2 = {
  name: "Robert",
  age: 40,
  city: "Afula"
}
if (p1.age == p2.age) {
  if (p1.city == p2.city) {
    console.log(p1.name + " wanted to date " + p2.name)
  }
  else {
    console.log(p1.name + " wanted to date " + p2.name + ", but couldn't")
  }
}

//------------------

const books = [
  {
    "author": "Chinua Achebe",
    "title": "Things Fall Apart"
  },
  {
    "author": "Hans Christian Andersen",
    "title": "Fairy tales",
  },
  {
    "author": "Dante Alighieri",
    "title": "The Divine Comedy"
  },

  {
    "author": "Jane Austen",
    "title": "Pride and Prejudice"
  },
  {
    "author": "Samuel Beckett",
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy"
  },
  {
    "author": "Giovanni Boccaccio",
    "title": "The Decameron"
  }
]

let library = {
  "books": books
}

console.table(library.books)

//------------------

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const clientName = prompt('Please enter the name for your reservation');
if (reservations[clientName]) {
  if (reservations[clientName].claimed) {
    console.log("Sorry, somebody already claimed this reservation")
  } else {
    console.log("Welcome, "+clientName)
  } 
} else {
  console.log("Sorry, there is no reservation for your name.")
}