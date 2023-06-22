const Bank = function() {
    var _money = 500

    const depositCash  = function(sum){
        _money += sum
    }

    const checkBalance  = function(str){
        console.log(_money)
    }

    

    return {
        deposit: depositCash ,
        showBalance: checkBalance 
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950