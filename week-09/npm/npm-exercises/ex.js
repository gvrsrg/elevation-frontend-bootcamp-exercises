const validator = require('validator');
const { faker } = require('@faker-js/faker');

//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
{
    const eml = "shoobert@dylan";
    console.log(`${eml} is ${(validator.isEmail(eml) ? "" : "not ")}a valid email`);  
    }


//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale

{
    const phn = "786-329-9958";
    console.log(`${phn} is ${(validator.isMobilePhone(phn, ['en-US']) ? "" : "not ")}a valid US phone`);  
    }

//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
//Ultimately, it should print "im so excited"
let clean_text = validator.blacklist(text, blacklist)
console.log(clean_text.toLowerCase());  

function createFakeUser() {
    return {
        avatar: faker.image.avatar(),
        name: faker.person.firstName(),
        company: faker.company.name()
    };
  }

function makeHuman(num) {
    for (let i=0; i < num; i++) {
        console.log(createFakeUser());
    }
}

makeHuman(2);