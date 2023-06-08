const person = {
    name: "Julius",
    speak: function(food = "to eat") {
      console.log(`I like ${food}`)
    }
  }

console.log(person.name) //you know what this will do

person.speak("cheese toast") //and this? Try it out!

const isEven = function(num) {
    return !(num%2)
}

const printOdd = function(arr) {
    for (let element of arr) {
        if (!isEven(element)) {
            console.log(element)
        }
    }
}

const checkExists = function(arr, num) {
    for (let element of arr) {
        if (element===num) {
            return true
        }
    }
    return false

}


const calculator = {
    add: function(x,y) {
        return x + y
      },
    subtract: function(x,y) {
      return x - y
      }
  }



const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

increaseByNameLength = function(money, name){
    return money * name.length
}

makeRegal = function(name){
    return "His Royal Highness, "+name
}


turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"