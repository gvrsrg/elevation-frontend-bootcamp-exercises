const validateForm = function () {
    // const name = document.getElementById("name").value
    // const salary = document.getElementById("salary").value
    // const birthday = document.getElementById("birthday").value
    // const phone = document.getElementById("phone").value

    const name = document.forms[0].name.value
    const salary = Number(document.forms[0].salary.value)||0
    const birthday = document.forms[0].birthday.value
    const phone = document.forms[0].phone.value
    let errorMessage = ""
    if (name.length<=2){
        errorMessage +="<p>Name must be longer than 2 characters</p>"
    }
    if (salary<=1000 || salary>=16000){
        errorMessage +="<p>Salary must be greater than 10,000 but less than 16,000</p>"
    }

    if (!birthday){
        errorMessage +="<p>Birthday may not be null</p>"
    }

    if (!(phone.length==10)){
        errorMessage +="<p>Phone must be 10 digits long</p>"
    } else {
            var trdata = phone.replace(/[^0-9]/gi, '');
            if(!(trdata==phone)) {
                errorMessage +="<p>Phone must be 10 digits long</p>"                
            }
        }

    const errorBlock = document.getElementById("error-message")
    //errorBlock.innerHTML = ""
    while (errorBlock.lastElementChild) {
        errorBlock.removeChild(errorBlock.lastElementChild);
    }
    
    const errorDiv = document.createElement("div")
    errorDiv.innerHTML = errorMessage


    errorBlock.appendChild(errorDiv)


}