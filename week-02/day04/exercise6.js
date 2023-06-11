const coffeeShop = {
  beans: 40,
  money: 0,
  beanPrice: 0.1,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 2 },
    doubleShot: { beanRequirement: 15, price: 8 },
    frenchPress: { beanRequirement: 12, price: 6 }
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (!(this.drinkRequirements[drinkType])) {
      alert("Sorry, we don't make " + drinkType)
    } else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert("Sorry, we’re all out of beans!")
    } else {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement
    }

  },

  buyBeans: function (numBeans) {
    var costOfPurchase = numBeans * this.beanPrice;
    if (this.money < costOfPurchase) {
      alert("Not enough money to buy beans!")
    } else {
      this.money -= costOfPurchase;
      this.beans += numBeans;
    }
  },

  buyDrink: function (drinkType) {
    if (!(this.drinkRequirements[drinkType])) {
      alert("Sorry, we don't make " + drinkType)
      return
    } else if (this.beans < this.drinkRequirements[drinkType].beanRequirement) {
      alert("Sorry, we’re all out of beans!")
      return
    } else {
      this.money += this.drinkRequirements[drinkType].price
      console.log(`Making ${drinkType} for ${this.drinkRequirements[drinkType].price}$`)
      this.makeDrink(drinkType)
    }

  }

}



coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
coffeeShop.buyBeans(100)
coffeeShop.buyDrink("frenchPress"); 