const pizzaPlace = "The Pizza Planet";
let numberOfToppings = 27;

console.log(pizzaPlace, typeof pizzaPlace, numberOfToppings, typeof numberOfToppings)

console.log(`This is ${pizzaPlace}, where we offer ${numberOfToppings} toppings to make your pizza yours.`)

if (numberOfToppings < 10) {
  console.log(`Quality, not Quantity!`)
} else {
  console.log(`A whole lot of pizza!`)
}

for (i = 1; i <= numberOfToppings; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}
