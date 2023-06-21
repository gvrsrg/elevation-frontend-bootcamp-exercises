const Bank = function() {
    var _money = 500

    const deposit = function(sum){
        _money += sum
    }

    const showBalance = function(str){
        console.log(_money)
    }

    

    return {
        deposit: deposit,
        showBalance: showBalance
    }
}

const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950