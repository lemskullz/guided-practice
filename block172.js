const coffeeData = require("./block17.js")
console.log(coffeeData)

//2.
const coffeeNames = coffeeData.map(function(drink){
    return drink.name
})

console.log(coffeeNames)

//3.
const cheapDrinks = coffeeData.filter(drink => drink.price <= 5)
console.log(cheapDrinks)

//4.
const evenPrice = coffeeData.filter(drink => drink.price % 2 === 0)
console.log(evenPrice)

//5.
const totalPrice = coffeeData.reduce((acc, drink) => acc + drink.price,0)
console.log(totalPrice)

//6.
const seasonalDrinks = coffeeData.filter(drink => drink.seasonal)
console.log(seasonalDrinks)

//7.
const seasonalBeanDrinks = seasonalDrinks.map(drink => drink.name + "With imported beans")
console.log(seasonalBeanDrinks)
