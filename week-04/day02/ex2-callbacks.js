const returnTime = function (time) {
    alert('The current time is: ' + time)
}


const getTime = func => func(Date())

getTime(returnTime)