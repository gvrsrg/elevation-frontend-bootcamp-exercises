const StringFormatter = function() {

    const capitalizeFirst = function(_name){
        return _name[0].toUpperCase() + _name.slice(1).toLowerCase()
    }

    const toSkewerCase = function(str){
        return str.replace(" ","-")
    }

    

    return {
        capitalizeFirst: capitalizeFirst,
        toSkewerCase: toSkewerCase
    }
}

const formatter = StringFormatter()

formatter.capitalizeFirst("dorothy") //should return Dorothy
formatter.toSkewerCase("blue box") //should return blue-box