people_info = [
    {
        name: "guido",
        profession: "bungalow builder",
        age: 17,
        country: "canaland",
        city: "sydurn",
        catchphrase: "what a piece of wood!"
    },
    {
        name: "petra",
        profession: "jet plane mechanic",
        age: 31,
        country: "greenmark",
        city: "bostork",
        catchphrase: "that's my engine, bub"
    },
    {
        name: "damian",
        profession: "nursery assistant",
        age: 72,
        country: "zimbia",
        city: "bekyo",
        catchphrase: "with great responsibility comes great power"
    },
    {
        name: "Emily",
        profession: "Software Engineer",
        age: 30,
        country: "USA",
        city: "Seattle",
        catchphrase: "Code makes the world go round!"
    },
    {
        name: "Liam",
        profession: "Graphic Designer",
        age: 25,
        country: "Canada",
        city: "Toronto",
        catchphrase: "Creativity knows no bounds!"
    },
    {
        name: "Sophia",
        profession: "Teacher",
        age: 42,
        country: "Australia",
        city: "Sydney",
        catchphrase: "Education is the key to success!"
    },
    {
        name: "Ethan",
        profession: "Chef",
        age: 35,
        country: "France",
        city: "Paris",
        catchphrase: "Food is an art on a plate!"
    },
    {
        name: "Olivia",
        profession: "Photographer",
        age: 28,
        country: "Germany",
        city: "Berlin",
        catchphrase: "Capturing moments that last a lifetime!"
    },
    {
        name: "Mason",
        profession: "Accountant",
        age: 33,
        country: "UK",
        city: "London",
        catchphrase: "Numbers never lie!"
    },
    {
        name: "Ava",
        profession: "Marketing Manager",
        age: 29,
        country: "Spain",
        city: "Barcelona",
        catchphrase: "Think outside the box!"
    },
    {
        name: "Noah",
        profession: "Doctor",
        age: 45,
        country: "Japan",
        city: "Tokyo",
        catchphrase: "Saving lives one patient at a time!"
    },
    {
        name: "Mia",
        profession: "Writer",
        age: 31,
        country: "Brazil",
        city: "Rio de Janeiro",
        catchphrase: "Words have the power to change the world!"
    }]

const capitalize = function (str) {
    let capitalizedStr = ""
    capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
    capitalizedStr += str.slice(1) //add the rest of str normallyreturn capitalizedStr
    return capitalizedStr
}

const getAge = function (age) {
    if (age < 21) {
        return "Underage"
    } else if (age <= 55) {
        return age
    } else {
        return "55+"
    }
}



const getSummary = function (person) {
    let summary = ""
    summary += capitalize(person.name)
    summary += ` is ${getAge(person.age)} ` //Yes - you can put a function call inside the tick quotes!
    summary += capitalize(person.profession) //call function for profession
    summary += ` from ${capitalize(person.city)}, ${capitalize(person.country)}. `//call function for country + city
    summary += `${capitalize(person.name)} loves to say "${capitalize(person.catchphrase)}".`//call function for catchphrasereturn summary
    return summary
}

console.log(getSummary(people_info[0]))

