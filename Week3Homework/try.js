function getPizzaOrder(size, crust, ...toppings) {
    let order = [size, crust, toppings];
    const listToppings = () => {
        /*let theseToppings = `${toppings[0..toppings.length - 2]} and ${toppings[toppings.length - 1]}.`;*/
        console.log(`One ${size} ${crust} crust pizza with ${toppings} coming up!`);
        console.log(listToppings);
        return order;
    }
    
    /*if (!toppings) {
        return console.log(`One ${size} ${crust} crust cheese pizza coming up!`;
    } else if (!pizzaToppings.includes(toppings)) {
        return console.log(`I'm sorry, we don't have ${toppings}.`)
    } else {
        console.log( `One ${size} ${crust} crust pizza with ${theseToppings} coming up!`);
    }*/
    listToppings();
}

getPizzaOrder("large", "hand tossed");
getPizzaOrder("medium", "deep dish", "ham", "bacon", "pineapple");
getPizzaOrder("small", "thin", "anchovies");
//console.log(order);

function preparePizza() {
    let order = getPizzaOrder("medium", "deep dish", "ham", "bacon", "pineapple");
    console.log(`Cooking ${order} pizza!`);
    let pizza = {
        size: "medium",
        crust: "deep dish",
        toppings: ["ham", "bacon", "pineapple",]
    }
    return pizza;
}

preparePizza();

function servePizza(pizza) {
    pizza = {
        size: "medium",
        crust: "deep dish",
        toppings: ["ham", "bacon", "pineapple",]
    }

    console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} ${pizza.toppings} pizza.`);
}

servePizza();
