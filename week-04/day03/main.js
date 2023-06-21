function makeAdd() {
    let lastValue = 0

    return function(y) {
        var result = lastValue + y
        lastValue = y
        return result;
    };




  };
 
var add = makeAdd();


console.log(add(3))
console.log(add(1))
console.log(add(2))
console.log(add(2))
console.log(add(8))