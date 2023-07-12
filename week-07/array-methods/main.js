//ex1

let emailsAndNames = users.map(u => { return { email: u.email, companyName : u.companyName } })
console.log(emailsAndNames)


//ex2

let zipCode5 = users.filter(u => u.address.zipcode[0]=== "5")
console.log(zipCode5)



//ex3

let zipCode5ID = users
    .filter(u => u.address.zipcode[0]=== "5")
    .map(u => u.id)
console.log(zipCode5ID)


//ex4

let namesC = users
    .map(u => u.name)
    .filter(u => u[0]=== "C")
console.log(namesC)


//ex5

let allLiveSouthChristy = users.every(u => u.address.city === "South Christy")
console.log(allLiveSouthChristy)

//ex6

let apt950Company = users
    .find(u => u.address.suite === "Apt. 950").company.name
    //[0].company.name
console.log(apt950Company)


//ex7
const userDescription = function(user){
    console.log(`${user.name.toUpperCase()} lives in a ${user.address.city.toUpperCase()} and owns the company ${user.company.name.toUpperCase()} `)
}

users.forEach(userDescription)
