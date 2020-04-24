let pizzaToppings = ["pepperoni", "ham", "bacon", "chicken", "green peppers", "onion", "mushroom", "tomato", "pineapple"];

function greetCustomer() {
    console.log(`Welcome to The Pizza Planet, our toppings include ${pizzaToppings}.`);
}

greetCustomer();


function getPizzaOrder(size, crust, ...toppings) {
    const listToppings = () => {
        let theseToppings = `${toppings[0..toppings.length - 2]} and ${toppings[toppings.length - 1]}.`;
        return theseToppings;
    }
    /*if (!toppings) {
        console.log(`One ${size} ${crust} crust cheese pizza coming up!`);
    }
    if (!pizzaToppings.includes(toppings)) {
        console.log(`I'm sorry, we don't have ${toppings}.`)
    } else {
        console.log( `One ${size} ${crust} crust pizza with ${theseToppings} coming up!`);
    }*/
    console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`)
    let order = [size, crust, toppings];
    console.log(order);
    return order;
}

getPizzaOrder("large", "hand tossed");
getPizzaOrder("medium", "deep dish", "ham", "bacon", "pineapple");
getPizzaOrder("small", "thin", "anchovies");
//console.log(order);

function preparePizza() {
    let order = ["medium", "thin", "pepperoni"];
    console.log(`Cooking ${order} pizza!`);
    const pizza = {
        size: order[0],
        crust: order[1],
        toppings: order[2]
    }
    return pizza;
}

preparePizza();

function servePizza(pizza) {
    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} ${pizza.toppings} pizza.`);
}

servePizza();

