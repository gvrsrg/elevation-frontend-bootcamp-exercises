const Family = function() {

    let members = [];
    

    const birth = function(_name) {
        members.push(_name);
        console.log(members);
    }

    return birth
}

const giveBirth = Family()

giveBirth('Alice')
giveBirth('Bob')
giveBirth('Charlie')
giveBirth('Dave')

